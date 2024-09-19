import nc from 'next-connect';
import requireFirebaseToken from '../../server/middleware/requireFirebaseToken';
import { db } from '../../utils/auth/firebaseAdmin';
import { maxPiggybanksPerUser } from '../../src/settings';

const piggybankExistsErrorMessage = 'A piggybank with this name already exists.';
async function isPiggybankNameNonexistant(piggybankName) {
  const piggybank = await db()
    .collection('piggybanks')
    .doc(piggybankName)
    .get();
  if (piggybank.exists) {
    throw new Error(piggybankExistsErrorMessage);
  }
  return true;
}

const userOverPiggybankLimitErrorMessage = 'Piggybank limit has been reached.';
async function isUserUnderPiggybankLimit(uid) {
  const piggybanks = await db()
    .collection('piggybanks')
    .where('owner_uid', '==', uid)
    .get();
  if (piggybanks._size >= maxPiggybanksPerUser) {
    throw new Error(userOverPiggybankLimitErrorMessage);
  }
  return true;
}

const createPiggybank = async (req, res) => {
  try {
    const { piggybankName } = req.body;
    const { uid } = req.headers;
    await Promise.all([
      isPiggybankNameNonexistant(piggybankName),
      isUserUnderPiggybankLimit(uid),
    ]);
    await db()
    .collection('piggybanks')
    .doc(piggybankName)
    .set({
      owner_uid: uid,
    });
    return res.status(200).end();
  } catch (error) {
    if (error.message === piggybankExistsErrorMessage) {
      return res.status(409).send(piggybankExistsErrorMessage);
    }
    if (error.message === userOverPiggybankLimitErrorMessage) {
      return res.status(406).send(userOverPiggybankLimitErrorMessage);
    }
    return res.status(500).end();
  }
};

const handler = nc()
    .use(requireFirebaseToken)
    .post(createPiggybank);

export default handler;

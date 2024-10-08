/* globals window */
import { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../../utils/auth/initFirebase';
import { setUserCookie } from '../../utils/auth/userCookies';
import { mapUserData } from '../../utils/auth/mapUserData';

initFirebase();

const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [ // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/dashboard',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;

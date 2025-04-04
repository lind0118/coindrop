import { useState, useRef, useContext } from "react";
import { Center, Box, Button, Stack, Image as ChakraImage, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useUser } from '../../../utils/auth/useUser';
import { storage } from '../../../utils/client/storage';
import { piggybankImageStoragePath } from '../../../utils/storage/image-paths';
import { AvatarContext } from '../context/avatar-context';
import { Avatar } from '../avatar/Avatar';
import { PublicPiggybankData } from '../PublicPiggybankDataContext';
import { db } from '../../../utils/client/db';
import { FileInput } from '../../Buttons/file-input/FileInput';

function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = reject;
  });
}

const AvatarInput = () => {
    const inputRef = useRef(null);
    const { setImageUploadedDateTime } = useContext(AvatarContext);
    const { piggybankDbData, setPiggybankDbData } = useContext(PublicPiggybankData);
    const hasAvatar = piggybankDbData.has_avatar;
    const { query: { piggybankName } } = useRouter();
    const { user } = useUser();
    const uid = user?.id;
    const piggybankRef = db.collection('piggybanks').doc(piggybankName);
    const fileSizeError = "Image too large";
    const contentTypeError = "Only images are accepted";
    const imageDimensionsError = "Image height and width must be >= 250px";
    const [fileSelectErrorMessage, setFileSelectErrorMessage] = useState();
    function clearInput() { inputRef.current.value = null; }
    const setHasAvatar = async (value) => {
      const has_avatar = value;
      await piggybankRef.set({
        has_avatar,
      }, { merge: true });
      setPiggybankDbData({ ...piggybankDbData, has_avatar });
    };
    const onInputChange = async ({ event }) => {
      setFileSelectErrorMessage(null);
      const file = event?.target?.files?.[0];
      const storageRef = storage.ref();
      const photoPath = piggybankImageStoragePath({ ownerUid: uid, piggybankName });
      const photoRef = storageRef.child(photoPath);
      if (file) {
        try {
          const contentType = file.type;
          if (!contentType.startsWith("image/")) {
            throw new Error(contentTypeError);
          }
          if (file.size > 1000000) {
            throw new Error(fileSizeError);
          }
          const { width, height } = await getImageDimensions(file);
          if (width < 250 || height < 250) {
            throw new Error(imageDimensionsError);
          }
          await photoRef.put(file);
          setImageUploadedDateTime(Date.now());
          clearInput();
          if (!hasAvatar) {
            setHasAvatar(true);
          }
        } catch (err) {
          const { message } = err;
          if (message === fileSizeError) {
            setFileSelectErrorMessage("Image too large. Please resize image to < 1MB.");
          } else if (message === contentTypeError) {
            setFileSelectErrorMessage("Only .jpg, .png, and .webp images are accepted.");
          } else if (message === imageDimensionsError) {
            setFileSelectErrorMessage("Width and height must be at least 250px");
          } else {
            setFileSelectErrorMessage("Error during upload. Please try again.");
          }
          clearInput();
        }
      }
    };
    return (
        <Stack>
          <Box mx="auto" mb={3}>
            {
              hasAvatar
              ? <Avatar />
              : <ChakraImage src="/avatar-placeholder.png" alt="avatar placeholder" />
            }
          </Box>
          <Center my={5}>
            <FileInput
              text={hasAvatar ? "Upload new image" : "Upload image"}
              id="avatar-input"
              inputRef={inputRef}
              style={{display: "block", margin: "auto"}}
              accept="image/png, image/jpeg, image/webp"
              onChange={(event) => onInputChange({ event, uid, piggybankName })}
            />
          </Center>
          {fileSelectErrorMessage && (
            <Text textAlign="center" color="red.500">
              <WarningIcon mr={2} />
              {fileSelectErrorMessage}
            </Text>
          )}
          {hasAvatar && (
            <Button
              onClick={() => {
                setHasAvatar(false);
              }}
              colorScheme="red"
            >
              Remove image
            </Button>
          )}
        </Stack>
    );
};

export default AvatarInput;

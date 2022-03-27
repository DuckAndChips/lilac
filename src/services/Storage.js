import { app } from "./FirebaseApp";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

export const uploadImage = async (uid, imageFile) => {
  const storageRef = ref(storage, `imgs/${uid}/${imageFile.name}`);
  const uploadSnapshot = await uploadBytes(storageRef, imageFile);
  const url = await getDownloadURL(storageRef);
  return url;
};

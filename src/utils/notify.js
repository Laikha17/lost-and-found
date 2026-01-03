import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const notify = async (email, message) => {
  await addDoc(collection(db, "notifications"), {
    email,
    message,
    seen: false,
    time: Date.now(),
  });
};

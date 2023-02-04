import { auth, db } from ".";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { UserDataInterface } from "../../interfaces/users.interface";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

const usersCollectionRef = collection(db, "users");

export const getUserDetails = async (user: User) => {
  return (await getDoc(doc(db, "users", user.uid))).data();
};

export const setUserDetails = async (user: User, data: UserDataInterface) => {
  return await setDoc(doc(db, "users", user.uid), { ...data });
};

export const createUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      setUserDetails(user, {});
    }
  );
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

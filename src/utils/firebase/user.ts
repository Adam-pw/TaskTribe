import { auth, db } from ".";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { UserDataInterface } from "../../interfaces/users.interface";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from "@firebase/auth";

const usersCollectionRef = collection(db, "users");

export const getUserDetails = async () => {
    return await
};

export const setUserDetails = async (user: User,data:UserDataInterface) => {
    setDoc(doc(db,"habits",user.uid),{...data});
};

export const createUser = async (data: UserDataInterface) => {
  createUserWithEmailAndPassword(auth, data.email, data.password).then(
    (userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: data.name,
      });
      setUserDetails(user,data);
    }
  );
};

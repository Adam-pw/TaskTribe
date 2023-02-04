import { auth, db } from ".";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { UserDataInterface } from "../../interfaces/users.interface";
import { signInWithEmailAndPassword, User } from "firebase/auth";

const usersCollectionRef = collection(db, "users");

export const getUserDetails = async (user: User) => {
  return (await getDoc(doc(db, "users", user.uid))).data();
};

export const getAllUsers = async () => {
  const querySnapshot = await getDocs(usersCollectionRef);

  const dataArr: Array<any> = [];
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });

  return dataArr;
};

export const setUserDetails = async (user: User, data: UserDataInterface) => {
  return await setDoc(doc(db, "users", user.uid), { ...data });
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

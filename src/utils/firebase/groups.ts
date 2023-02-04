import { db } from ".";
import {
  addDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { GroupInterface } from "../../interfaces/groups.interface";
import { User } from "firebase/auth";
import { setUserDetails } from "./user";

const groupsCollectionRef = collection(db, "groups");

export const getUserGroups = async (userGroups: Array<string>) => {
  const q = query(
    groupsCollectionRef,
    where("uid", "array-contains-any", userGroups)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const createGroup = async (user: User, data: GroupInterface) => {
  return await addDoc(groupsCollectionRef, { ...data }).then((res) => {
    setUserDetails(user, { groups: arrayUnion(res.id) });
  });
};

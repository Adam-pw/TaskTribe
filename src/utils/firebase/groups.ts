import { db } from ".";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { GroupInterface } from "../../interfaces/groups.interface";

const groupsCollectionRef = collection(db, "habits");

export const getGroup = async (userGroups: Array<string>) => {
  const q = query(
    groupsCollectionRef,
    where("uid", "array-contains-any", userGroups)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const createGroup = async (data: GroupInterface) => {
  return await addDoc(groupsCollectionRef, { ...data });
};

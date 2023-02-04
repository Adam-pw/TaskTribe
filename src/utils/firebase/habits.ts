import { db } from ".";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { HabitInterface } from "../../interfaces/habits.interface";
import { User } from "@firebase/auth";
import { setUserDetails } from "./user";

const habitsCollectionRef = collection(db, "habits");

export const getUserHabits = async (userHabits: Array<string>) => {
  const q = query(
    habitsCollectionRef,
    where("uid", "array-contains-any", userHabits)
  );

  const dataArr: Array<any> = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });

  return dataArr as Array<HabitInterface>;
};

export const getGroupHabits = async () => {};

export const updateHabit = async (data: HabitInterface) => {
  return await updateDoc(doc(db, "habits"), { ...data });
};

export const createHabit = async (user: User, data: HabitInterface) => {
  return await addDoc(habitsCollectionRef, { ...data }).then((res) => {
    setUserDetails(user, { habits: arrayUnion(res.id) });
  });
};

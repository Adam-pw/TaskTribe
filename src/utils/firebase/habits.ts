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
import { updateUserDetails } from "./user";

const habitsCollectionRef = collection(db, "habits");

export const getUserHabits = async (user_id: string) => {
  const q = query(habitsCollectionRef, where("owner", "==", user_id));

  const dataArr: Array<any> = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    dataArr.push({ ...doc.data(), id: doc.id });
  });

  return dataArr;
};

export const getGroupHabits = async () => {};

export const updateHabit = async (data: HabitInterface) => {
  return await updateDoc(doc(db, "habits"), { ...data });
};

export const createHabit = async (user: User, data: HabitInterface) => {
  return await addDoc(habitsCollectionRef, { ...data }).then((res) => {
    updateUserDetails(user, { habits: arrayUnion(res.id) });
  });
};

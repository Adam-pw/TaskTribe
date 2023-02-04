import { db } from ".";
import { addDoc, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { HabitInterface } from "../../interfaces/habits.interface";

const habitsCollectionRef = collection(db, "habits");

export const getUserHabits = async (userHabits: Array<string>) => {
  const q = query(
    habitsCollectionRef,
    where("uid", "array-contains-any", userHabits)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const getGroupHabits = async () => {};

export const updateHabit = async (data:HabitInterface) => {
  return await updateDoc(doc(db,"habits",),{...data});
};

export const createHabit = async (data: HabitInterface) => {
  return await addDoc(habitsCollectionRef, { ...data });
};

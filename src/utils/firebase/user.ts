import { db } from ".";
import { addDoc, collection } from "firebase/firestore";
import { UserDataInterface } from "../../interfaces/users.interface";

const usersCollectionRef = collection(db, "habits");

export const getUserDetails = async () => {};

export const setUserDetails = async () => {};

export const createUser = async () => {};

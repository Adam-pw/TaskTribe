import { FieldValue } from "firebase/firestore";

export interface UserDataInterface {
  uid?: string;

  displayName?: string;
  photoURL?: string;

  description?: string;

  habits?: string[] | FieldValue;
  groups?: string[] | FieldValue;
  friends?: string[] | FieldValue;

  //TODO
  // preferences?: any;
}

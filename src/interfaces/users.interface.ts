import { FieldValue } from "firebase/firestore";

export interface UserDataInterface {
  description?: string;

  habits?: string[] | FieldValue;
  groups?: string[] | FieldValue;
  friends?: string[] | FieldValue;

  //TODO
  // preferences?: any;
}

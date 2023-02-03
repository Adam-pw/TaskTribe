export interface UserDataInterface {
  email: string;
  password: string;

  name: string;
  avatar?: string;
  description?: string;

  habits?: string[];
  groups?: string[];
  friends?: string[];

  //TODO
  // preferences?: any;
}

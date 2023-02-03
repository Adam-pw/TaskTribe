export interface GroupInterface {
  name: string;
  description?: string;
  avatar?: string;

  owner: string;
  members: string[];

  habitKeys?: string[];

  //TODO:
  //preferences?: any;
}

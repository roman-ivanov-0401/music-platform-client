export enum Roles {
  admin = "ADMIN",
  user = "USER",
}

export type User = {
  _id: string;
  email: string;
  name: string;
  roles: Roles[];
  library: string;
};

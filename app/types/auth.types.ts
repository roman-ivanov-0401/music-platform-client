import { User } from "./user.types";

export interface AuthRespose {
  user: User;
  refreshToken: string;
  accessToken: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

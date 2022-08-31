export enum AuthMode {
  login = "LOGIN",
  register = "REGISTER",
}

export interface AuthScreenProps {
  defaultMode: AuthMode;
}

export interface AuthLoginFields {
  email: string;
  password: string;
}

export interface AuthRegisterFields {
  name: string;
  email: string;
  password: string;
}

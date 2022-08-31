import { Roles } from "@/types/user.types";

import { useTypedSelector } from "./redux";

export const useAuth = (role: Roles) => {
  const roles = useTypedSelector((state) => state.userReducer.userData.roles);
  return roles.includes(role);
};

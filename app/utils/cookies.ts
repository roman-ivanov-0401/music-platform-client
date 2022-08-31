import Cookies from "js-cookie";

export const tokensToCookie = (accessToken: string, refreshToken: string) => {
  Cookies.set("accessToken", accessToken);
  Cookies.set("refreshToken", refreshToken);
};

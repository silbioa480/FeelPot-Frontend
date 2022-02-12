import { atom } from "recoil";

export const saltKey = atom({
  key: "salt",
  default: "salting",
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

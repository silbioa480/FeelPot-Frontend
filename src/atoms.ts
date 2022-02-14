import { atom } from "recoil";
import IMember from "./interface/IMember";

export const saltKey = atom({
  key: "salt",
  default: "salting",
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

export const loggedMemberAtom = atom<IMember>({
  key: "loggedMember",
  default: {
    id: "",
    password: "",
    name: "",
    birth: new Date(),
    isMale: false,
    address: "",
    email: "",
    phoneNumber: "",
    isAdmin: false,
    cart: "",
  },
});

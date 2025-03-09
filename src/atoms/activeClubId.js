import { atom } from "recoil";

export const activeClubIdState = atom({
  key: "activeClubIdState", // 고유한 키
  default: null, // 기본값
});

import { KEY_STORAGE } from "@/constants";

export const getData = () => {
  return JSON.parse(localStorage.getItem(KEY_STORAGE) || "[]");
};

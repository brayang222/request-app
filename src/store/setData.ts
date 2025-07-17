import { KEY_STORAGE } from "@/constants";
import { Request } from "@/types/request";
import { getData } from "./getData";

export const setData = (data: Request) => {
  const existingData = getData() ?? [];
  const setData = [...existingData, data];

  localStorage.setItem(KEY_STORAGE, JSON.stringify(setData));
};

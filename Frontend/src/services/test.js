import api from "../config/api";

export const fetchTest = async () => {
  const { data } = await api.get("/api");
  return data;
};
import api from "../config/api";

export const fetchTest = async () => {
  const { data } = await api.post("/api/test");
  return data;
};
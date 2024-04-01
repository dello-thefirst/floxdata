import axios from "axios";

export async function userDetails() {
  const res = await axios.get(`/api/user`);
  return res.data;
}

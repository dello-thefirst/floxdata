"use server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function loginUser(event: React.FormEvent<HTMLFormElement>) {
  let isLoginLoading = true;
  event.preventDefault();
  isLoginLoading = true;
  const formData = new FormData(event.target as HTMLFormElement);
  async function fetch() {
    try {
      const res = await axios.post(`/api/user/login`, {
        username: formData.get("uid"),
        password: formData.get("password"),
      });
      redirect("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      isLoginLoading = false;
    }
  }
  fetch();
  return { isLoginLoading };
}

function generateJWT() {
  const length = 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

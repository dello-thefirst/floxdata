"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
const styles = {
  input:
    "w-full h-[40px] my-2 text-[12px] font-normal pl-2 bg-transparent border-b border-gray-500 outline-none focus :border-pink-700",
  button:
    "w-full h-[40px] rounded-md my-2 text-white text-[12px] font-normal bg-purple-600 mt-5",
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  function loginUser(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    async function fetch() {
      try {
        const res = await axios.post(`/api/user/signup`, {
          name: formData.get("name"),
          email: formData.get("email"),
          username: formData.get("username"),
          password: formData.get("password"),
        });
        if (res.status === 201) router.push("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }
  return (
    <form onSubmit={loginUser} className="mt-10">
      <input
        className={styles.input}
        type="text"
        placeholder="Full Name"
        name="name"
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        name="email"
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Username"
        name="username"
      />

      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        name="password"
      />
      <button
        className={
          isLoading ? styles.button + " cursor-not-allowed" : styles.button
        }
        disabled={isLoading ? true : false}
        type="submit"
      >
        {isLoading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin"></i>
            <span>&nbsp; Signing Up</span>
          </>
        ) : (
          "Login"
        )}
      </button>
      <p className="flex justify-between mt-2 mb-5 text-[12px] font-light">
        <span className="text text-gray-400">Already Have an Account?</span>

        <span className="text underline text-blue-400">
          <Link href={"/auth/login"}>Login</Link>
        </span>
      </p>
    </form>
  );
}

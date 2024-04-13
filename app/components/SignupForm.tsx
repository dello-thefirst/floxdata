"use client";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
const styles = {
  input:
    "w-full h-[40px] my-2 text-[12px] font-normal pl-2 bg-transparent border-b border-gray-500 outline-none focus :border-pink-700",
  button:
    "w-full h-[40px] rounded-md my-2 text-white text-[12px] font-normal bg-purple-600 mt-5",
};

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  function signupUser(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    async function fetch() {
      try {
        const res = await axios.post(`/api/user/signup`, {
          name: formData.get("name"),
          email: formData.get("email"),
          username: formData.get("username"),
          phone: formData.get("phone"),
          password: formData.get("password"),
        });
        if (res.status === 201) window.location.assign("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }
  return (
    <form onSubmit={signupUser} className="mt-10">
      <input
        className={styles.input}
        type="text"
        required
        placeholder="Full Name"
        name="name"
      />
      <input
        className={styles.input}
        type="email"
        required
        placeholder="Email"
        name="email"
      />
      <input
        className={styles.input}
        type="text"
        required
        placeholder="Username"
        name="username"
      />

      <input
        className={styles.input}
        type="number"
        required
        placeholder="Phone Number"
        name="phone"
      />

      <input
        className={styles.input}
        type="password"
        required
        placeholder="Password"
        name="password"
      />
      <p className="error-msg text-[11px] my-2 text-red-500">
        {errorMsg !== "" ? errorMsg : ""}
      </p>
      <button
        className={
          isLoading ? styles.button + " cursor-not-allowed" : styles.button
        }
        disabled={isLoading}
        type="submit"
      >
        <i
          className={`fa-solid fa-circle-notch fa-spin ${
            isLoading ? " " : "opacity-0"
          }`}
        ></i>
        <span>
          {isLoading ? (
            <>
              <span>&nbsp;</span>Signing Up...
            </>
          ) : (
            "Signup"
          )}
        </span>
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

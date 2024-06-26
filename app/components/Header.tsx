"use client";
import React from "react";
import { useUserContext } from "../UserData";
import avatar from "@/app/assets/avatars/dog.png";
import Image from "next/image";

export function AvatarSkeleton() {
  return (
    <div className="w-[40px] h-[40px] bg-gray-600 bg-opacity-10 rounded-full"></div>
  );
}

export default function Header() {
  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";

  function toggleTheme() {
    const theme = localStorage.getItem("theme") as string;
    if (theme == "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    console.log(theme);
  }
  return (
    <>
      <header className="w-full h-[70px] flex items-center px-[4%] justify-between sm:px-[5%]">
        <div className="welcome-msg flex gap-3 items-center">
          {!isUserDataLoading ? (
            <Image
              className="w-[35px] h-[35px] rounded-full"
              src={avatar}
              alt=""
              width={40}
              height={40}
            ></Image>
          ) : (
            <div className="skeleton w-[35px] h-[35px] rounded-full"></div>
          )}

          <div>
            {isUserDataLoading ? (
              <div className="skeleton w-[100px] h-[10px]"></div>
            ) : (
              <p className="username-txt text-[var(--color-1)] text-[13px] capitalize font-semibold ">
                Hi, {isUserDataLoading ? "..." : userDataObject.username}
              </p>
            )}
          </div>
        </div>

        <div
          onClick={toggleTheme}
          className="notification-cont w-[30px] h-[30px] shadow-lg rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-1)]"
        >
          <i className="fa-solid fa-moon-stars"></i>
        </div>
      </header>
    </>
  );
}

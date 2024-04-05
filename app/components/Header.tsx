"use client";
import React from "react";
import { getTimeOfDay } from "../functions/global";
import { useUserContext } from "../UserData";
import maleAvatar from "@/app/assets/icons/avatar_male.jpg";
import unknownAvatar from "@/app/assets/icons/avatar_unknown.jpg";
import Image from "next/image";

export default function Header() {
  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";

  return (
    <header className="w-full h-[70px] flex items-center px-[4%] justify-between sm:px-[5%] sm:h-[100px]">
      <div className="welcome-msg flex gap-3">
        <Image
          className="w-[40px] h-[40px] rounded-full"
          src={!isUserDataLoading ? maleAvatar : unknownAvatar}
          alt=""
          width={40}
          height={40}
        ></Image>
        <div>
          <p className="welcome-txt text-[10px] font-normal text-gray-400">
            Good {getTimeOfDay()},
          </p>
          {userData &&
            (isUserDataLoading ? (
              <p className="skeleton h-3 rounded-lg"> </p>
            ) : (
              <p className="username-txt text-[14px] text-gray-300">
                {isUserDataLoading ? "..." : userDataObject.name}
              </p>
            ))}
        </div>
      </div>

      <div className="notification-cont w-[30px] h-[30px] rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-gray-200">
        <i className="fa-solid fa-bell"></i>
      </div>
    </header>
  );
}

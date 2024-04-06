"use client";
import React from "react";
import { getTimeOfDay } from "../functions/global";
import { useUserContext } from "../UserData";
import maleAvatar from "@/app/assets/icons/avatar_male.jpg";
import unknownAvatar from "@/app/assets/icons/avatar_unknown.jpg";
import Image from "next/image";

export function AvatarSkeleton() {
  return <div className="w-[40px] h-[40px] bg-gray-700 rounded-full"></div>;
}

export default function Header() {
  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";

  return (
    <header className="w-full h-[70px] flex items-center px-[4%] justify-between sm:px-[5%] sm:h-[90px]">
      <div className="welcome-msg flex gap-3">
        {!isUserDataLoading ? (
          <Image
            className="w-[40px] h-[40px] rounded-full"
            src={maleAvatar}
            alt=""
            width={40}
            height={40}
          ></Image>
        ) : (
          <AvatarSkeleton />
        )}

        <div>
          <p className="welcome-txt text-[10px] font-normal text-gray-400">
            Good {getTimeOfDay()},
          </p>
          {isUserDataLoading ? (
            <p className="w-[90px] bg-gray-600 h-2 mt-1 rounded-lg"></p>
          ) : (
            <p className="username-txt text-[14px] text-gray-300">
              {isUserDataLoading ? "..." : userDataObject.name}
            </p>
          )}
        </div>
      </div>

      <div className="notification-cont w-[30px] h-[30px] rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-gray-200">
        <i className="fa-solid fa-bell"></i>
      </div>
    </header>
  );
}

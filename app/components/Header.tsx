"use client";
import React from "react";
import { getTimeOfDay } from "../functions/global";
import { useUserContext } from "../UserData";

export default function Header() {
  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";

  return (
    <header className="w-full h-[70px] flex items-center px-[4%] shadow-lg sm:px-[5%]">
      <div className="welcome-msg flex gap-3">
        <div>
          <p className="welcome-txt text-[10px] font-normal text-gray-400">
            Good {getTimeOfDay()},
          </p>
          {userData &&
            (isUserDataLoading ? (
              <p className="skeleton h-3 rounded-lg"> </p>
            ) : (
              <p className="username-txt text-[12px] text-gray-300">
                {isUserDataLoading ? "..." : userDataObject.name}
              </p>
            ))}
        </div>
      </div>
    </header>
  );
}

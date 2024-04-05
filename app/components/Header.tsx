"use client";
import React from "react";
import { getTimeOfDay } from "../functions/global";
import { useUserContext } from "../UserData";

export default function Header() {
  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";

  return (
    <header className="w-full h-[55px] flex items-center px-[5%] shadow-lg">
      <div className="welcome-msg flex gap-3">
        <div>
          <p className="welcome-txt text-[11px] font-normal text-gray-400">
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
    </header>
  );
}

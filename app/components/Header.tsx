"use client";
import React, { useEffect, useState } from "react";
import { getTimeOfDay } from "../functions/global";
import axios from "axios";

type UserDataProps = {
  id: number;
  name: string | null;
  email: string;
  username: string;
};

export default function Header() {
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsUserDataLoading(true);
        const res = await axios.get("/api/user");
        setUserData([res.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsUserDataLoading(false);
      }
    };
    getDetails();
  }, []);
  return (
    <header className="w-full h-[55px] flex items-center px-[5%] shadow-lg">
      <div className="welcome-msg flex gap-3">
        <div>
          <p className="welcome-txt text-[11px] font-normal text-gray-400">
            Good {getTimeOfDay()},
          </p>
          {isUserDataLoading && <p className="skeleton h-3 rounded-lg"> </p>}
          {!isUserDataLoading && (
            <p className="username-txt text-[14px] text-gray-300">
              {userData[0].name}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

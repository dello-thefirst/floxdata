"use client";
import Image from "next/image";
import React, { useState } from "react";
import airtelLogo from "@/app/assets/logos/airtel.png";
import mtnLogo from "@/app/assets/logos/mtn.png";
import gloLogo from "@/app/assets/logos/glo.png";
import nineMobileLogo from "@/app/assets/logos/9mobile.png";
import { useUserContext } from "../UserData";

export default function BuyDataInterface() {
  const [mobileNetwork, setMobileNetwork] = useState("mtn")
  const { isUserDataLoading, userData } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";
  return (
    <div className="w-full rounded-2xl bg-gray-100 h-auto p-5 flex gap-10 items-center justify-between mb-5">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="flex items-center justify-center gap-2">
          <Image
            src={
              mobileNetwork == "airtel"
                ? airtelLogo
                : mobileNetwork == "mtn"
                ? mtnLogo
                : mobileNetwork == "glo"
                ? gloLogo
                : mobileNetwork == "nineMobile"
                ? nineMobileLogo
                : airtelLogo
            }
            alt=""
            className="w-[30px] h-[30px] object-cover bg-gray-500 rounded-full"
          ></Image>
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-500"
        >
          {" "}
          <li onClick={() => setMobileNetwork("mtn")}>
            <a>
              {" "}
              <Image
                src={mtnLogo}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              ></Image>
              MTN
            </a>
          </li>
          <li onClick={() => setMobileNetwork("airtel")}>
            <a>
              <Image
                src={airtelLogo}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              ></Image>
              Airtel
            </a>
          </li>
          <li onClick={() => setMobileNetwork("glo")}>
            <a>
              {" "}
              <Image
                src={gloLogo}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              ></Image>
              GLO
            </a>
          </li>
          <li onClick={() => setMobileNetwork("nineMobile")}>
            <a>
              {" "}
              <Image
                src={nineMobileLogo}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              ></Image>
              9mobile
            </a>
          </li>
        </ul>
      </div>

      <input
        placeholder="Phone Number"
        className="w-full bg-transparent border-b border-slate-500 text-slate-500 outline-none text-[12px] tracking-[1px] text-center"
        type="text"
        defaultValue={!isUserDataLoading ? userDataObject.phone_number : ""}
      />
      <i className="fa-regular fa-flag text-gray-400"></i>
    </div>
  );
}

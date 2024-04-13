"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import airtelLogo from "@/app/assets/logos/airtel.png";
import mtnLogo from "@/app/assets/logos/mtn.png";
import gloLogo from "@/app/assets/logos/glo.png";
import nineMobileLogo from "@/app/assets/logos/9mobile.png";
import { useUserContext } from "@/app/UserData";

export default function Buy() {
  const [mobileNetwork, setMobileNetwork] = useState("mtn");
  const { isUserDataLoading, userData } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";
  //...
  useEffect(() => {
    async function getPlans(mobileNetwork: string) {
      try {
      } catch (error) {}
    }
  }, [mobileNetwork]);
  return (
    <div className="wrapper w-full h-full px-[3%]">
      <div className="w-full h-auto mb-5">
        <div className="w-[160px] h-[35px] bg-white rounded-lg drop-shadow-md flex items-center gap-1 cursor-pointer justify-center text-[12px] sm:text-[10px] sm:w-[140px] sm:h-[25px]">
          Buy Data / Airtime
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-gray-100 h-auto p-5 flex gap-5 items-center justify-between mb-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="flex items-center gap-2">
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
              className="w-[40px] h-[40px] bg-gray-500 rounded-full"
            ></Image>
            <i className="fa-solid fa-caret-down"></i>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
          className="w-full bg-transparent border-b border-gray-700 outline-none text-[12px] tracking-[1px] text-center"
          type="text"
          defaultValue={!isUserDataLoading ? userDataObject.phone_number : ""}
        />
      </div>

      <div className="packages w-full rounded-2xl bg-gray-100 h-auto p-5">
        {}
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import airtelLogo from "@/app/assets/logos/airtel.png";
import mtnLogo from "@/app/assets/logos/mtn.png";
import gloLogo from "@/app/assets/logos/glo.png";
import nineMobileLogo from "@/app/assets/logos/9mobile.png";
import { useUserContext } from "../UserData";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

interface PlanPackage {
  id: number;
  plan_id: number;
  plan_type: string;
  network: string;
  network_id: number;
  amount: number;
  size: number;
  validity: number;
}

export default function BuyDataInterface() {
  const [mobileNetwork, setMobileNetwork] = useState("mtn");
  const [planPackage, setPlanPackage] = useState<PlanPackage[]>([]);
  const [isPlanLoading, setIsPlanLoading] = useState(false);
  const { isUserDataLoading, userData } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";
  //...
  useEffect(() => {
    async function fetchPlans() {
      setIsPlanLoading(true);
      try {
        const res = await axios.get(
          `/api/buy-data/plans?network=${mobileNetwork}`
        );
        setPlanPackage(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPlanLoading(false);
      }
    }
    fetchPlans();
  }, [mobileNetwork]);
  return (
    <>
      <div className="w-full rounded-2xl bg-gray-100 h-auto p-5 flex gap-10 items-center justify-between mb-5">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-center gap-2"
          >
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

      <div className="packages w-full rounded-2xl bg-gray-100 h-auto p-5">
        <div className="w-full grid grid-cols-3 gap-5">
          {!isPlanLoading ? (
            planPackage.map((plan) => (
              <div
                className="w-full min-h-[100px] rounded-xl border border-purple-400 flex items-center justify-center"
                key={plan.id}
              >
                <div className="flex flex-col gap-4 items-center sm:gap-2">
                  <p className="text-[15px] sm:text-[12px]">{plan.validity} DAYS</p>
                  <p className="text-[12px] sm:text-[10px]">
                    {plan.size} {plan.size > 40 ? "mb" : "gb"}
                  </p>
                  <p className="text-[12px] font-semibold sm:text-[10px]">
                    &#8358; {plan.amount + 20}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </div>
      </div>
    </>
  );
}

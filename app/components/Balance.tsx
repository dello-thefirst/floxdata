"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Balance() {
  const [mainBalance, setMainBalance] = useState(0);
  const [referralBalance, setReferralBalance] = useState(0);
  //...
  const [isMainBalanceToggled, setIsMainBalanceToggled] = useState(true);
  const [isReferralBalanceToggled, setIsReferralBalanceToggled] =
    useState(true);
  //...
  const [isBalanceLoading, setIsBalanceLoading] = useState(true);

  const toggleBalance = (balanceState: string) => {
    if (balanceState == "isMainBalanceToggled") {
      if (isMainBalanceToggled) setIsMainBalanceToggled(false);
      else setIsMainBalanceToggled(true);
    } else {
      if (isReferralBalanceToggled) setIsReferralBalanceToggled(false);
      else setIsReferralBalanceToggled(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/user");
        setMainBalance(res.data.account_balance[0].main_balance);
        setReferralBalance(res.data.account_balance[0].referral_balance);
        setIsBalanceLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="sec-1 w-full flex gap-5">
      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl relative bg-gradient-to-tl from-[deeppink] to-[#321653]">
        <i
          onClick={() => toggleBalance("isMainBalanceToggled")}
          className={`fa-light ${
            isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
          } absolute right-3 top-3 cursor-pointer`}
        ></i>
        <p className="text-[12px] font-normal text-gray-300">Balance:</p>
        <p className="text-[25px] mt-1 text-white">
          &#8358;{" "}
          {!isBalanceLoading
            ? isMainBalanceToggled
              ? mainBalance
              : "* * * *"
            : "Loading"}
        </p>
      </div>

      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl  bg-gradient-to-tr from-[#2f0080] to-[rebeccapurple] relative">
        <i
          onClick={() => toggleBalance("isReferralBalanceToggled")}
          className={`fa-light ${
            isReferralBalanceToggled ? "fa-eye" : "fa-eye-slash"
          } absolute right-3 top-3 cursor-pointer`}
        ></i>
        <p className="text-[12px] font-normal text-gray-300">Referal Bonus:</p>
        <p className="text-[25px] mt-1 text-white">
          &#8358; {isReferralBalanceToggled ? referralBalance : "* * * *"}
        </p>
      </div>

      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl  bg-[var(--bg-secondary)] relative">
        <p className="text-[12px] font-normal text-gray-300">Coupon:</p>
        <p className="text-[25px] mt-1 text-white">&#8358; 0</p>
      </div>
    </div>
  );
}

export default Balance;

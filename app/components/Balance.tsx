"use client";
import React from "react";
import { useState } from "react";

function Balance() {
  const [mainBalance, setMainBalance] = useState(130.4);
  const [isMainBalanceToggled, setIsMainBalanceToggled] = useState(true);

  const [referralBalance, setReferralBalance] = useState(45.94);
  const [isReferralBalanceToggled, setIsReferralBalanceToggled] =
    useState(true);

  const toggleMainBalance = () => {
    if (isMainBalanceToggled) setIsMainBalanceToggled(false);
    else setIsMainBalanceToggled(true);
  };

  const toggleReferralBalance = () => {
    if (isReferralBalanceToggled) setIsReferralBalanceToggled(false);
    else setIsReferralBalanceToggled(true);
  };
  return (
    <div className="sec-1 w-full flex gap-5">
      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl relative bg-gradient-to-tl from-[deeppink] to-[#321653]">
        <i
          onClick={toggleMainBalance}
          className={`fa-light ${
            isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
          } absolute right-3 top-3 cursor-pointer`}
        ></i>
        <p className="text-[12px] font-normal text-gray-300">Balance:</p>
        <p className="text-[25px] mt-1 text-white">
          &#8358; {isMainBalanceToggled ? mainBalance : "* * * *"}
        </p>
      </div>

      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl  bg-gradient-to-tr from-[#2f0080] to-[rebeccapurple] relative">
        <i
          onClick={toggleReferralBalance}
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
        <p className="text-[25px] mt-1 text-white">&#8358; 60.05</p>
      </div>
    </div>
  );
}

export default Balance;

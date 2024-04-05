"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "../UserData";

function Balance() {
  const [mainBalance, setMainBalance] = useState(0);
  const [referralBalance, setReferralBalance] = useState(0);
  //...
  const [isMainBalanceToggled, setIsMainBalanceToggled] = useState(true);
  const [isReferralBalanceToggled, setIsReferralBalanceToggled] =
    useState(true);
  //...

  const toggleBalance = (balanceState: string) => {
    if (balanceState == "isMainBalanceToggled") {
      if (isMainBalanceToggled) setIsMainBalanceToggled(false);
      else setIsMainBalanceToggled(true);
    } else {
      if (isReferralBalanceToggled) setIsReferralBalanceToggled(false);
      else setIsReferralBalanceToggled(true);
    }
  };

  const { userData, isUserDataLoading } = useUserContext();
  useEffect(() => {
    if (userData.account_balance)
      setMainBalance(userData.account_balance[0]?.main_balance);
  }, [isUserDataLoading]);
  return (
    <div className="sec-1 w-full flex gap-5 sm:flex-nowrap sm:overflow-x-auto">
      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl relative bg-gradient-to-tl from-[deeppink] to-[#2e2a33] flex-none">
        <i
          onClick={() => toggleBalance("isMainBalanceToggled")}
          className={`fa-light ${
            isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
          } absolute right-3 top-3 cursor-pointer`}
        ></i>
        <p className="text-[12px] font-normal text-gray-300">Balance:</p>
        <p className="text-[25px] mt-1 text-white">
          &#8358;{" "}
          {!isUserDataLoading
            ? isMainBalanceToggled
              ? mainBalance
              : "* * * *"
            : ". . ."}
        </p>
      </div>

      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl  bg-gradient-to-tr from-[#2f0080] to-[rebeccapurple] relative flex-none">
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

      <div className="w-[260px] h-[140px] rounded-xl p-5 shadow-2xl  bg-[var(--bg-secondary)] relative flex-none">
        <p className="text-[12px] font-normal text-gray-300">Coupon:</p>
        <p className="text-[25px] mt-1 text-white">&#8358; 0</p>
      </div>
    </div>
  );
}

export default Balance;

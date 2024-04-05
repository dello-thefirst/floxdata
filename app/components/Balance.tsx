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
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";
  useEffect(() => {
    setMainBalance(
      !isUserDataLoading && userDataObject.account_balance[0]?.main_balance
    );
    setReferralBalance(
      !isUserDataLoading && userDataObject.account_balance[0]?.referral_balance
    );
  }, [isUserDataLoading]);
  return (
    <div className="sec-1 w-full flex gap-5">
      <div className="w-[380px] h-[140px] rounded-xl p-5 shadow-2xl relative bg-gradient-to-l from-[deeppink] to-[#24266dd8] sm:w-full">
        <p className="text-[12px] text-gray-400 uppercase">
          Total Balance: &nbsp;
          <i
            onClick={() => toggleBalance("isMainBalanceToggled")}
            className={`fa-light ${
              isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
            } cursor-pointer`}
          ></i>
        </p>
        <p className="text-[30px] mt-1 text-white">
          &#8358;{" "}
          {!isUserDataLoading
            ? isMainBalanceToggled
              ? mainBalance
              : "* * * *"
            : ". . ."}
        </p>
      </div>
    </div>
  );
}

export default Balance;

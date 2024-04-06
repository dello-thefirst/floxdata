"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "../UserData";

function Balance() {
  const [mainBalance, setMainBalance] = useState(0);
  //...
  const [isMainBalanceToggled, setIsMainBalanceToggled] = useState(true);

  const toggleBalance = () => {
    if (isMainBalanceToggled) setIsMainBalanceToggled(false);
    else setIsMainBalanceToggled(true);
  };

  const { userData, isUserDataLoading } = useUserContext();
  const userDataObject = !isUserDataLoading ? JSON.parse(userData) : "";
  useEffect(() => {
    setMainBalance(
      !isUserDataLoading && userDataObject.account_balance[0]?.main_balance
    );
  }, [isUserDataLoading]);
  return (
    <div className="sec-1 w-full">
      <div className="w-[380px] h-[140px] rounded-2xl p-5 flex justify-between items-center shadow-2xl relative bg-gradient-to-l from-[#b514ff] to-[#24266dd8] sm:w-full">
        <div>
          <p className="text-[11px] text-gray-400 font-bold">
            Total Balance: &nbsp;
            <i
              onClick={() => toggleBalance()}
              className={`fa-regular ${
                isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
              } cursor-pointer font-bold`}
            ></i>
          </p>
          <p className="text-[30px] mt-1 text-white font-2">
            &#8358;{" "}
            {!isUserDataLoading
              ? isMainBalanceToggled
                ? mainBalance
                : "* * * *"
              : ". . ."}
          </p>
        </div>

        <div className="w-[50px] h-[50px] rounded-xl bg-gray-300 flex justify-center items-center text-gray-700 shadow-xl text-[20px] font-bold cursor-pointer">
          <i className="fa-solid fa-sharp fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default Balance;

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
    setMainBalance(!isUserDataLoading && userDataObject.account_balance);
  }, [isUserDataLoading]);
  return (
    <div className="sec-1 w-full">
      <div className="w-[380px] h-[155px] rounded-[1rem] shadow-sm p-5 flex flex-col justify-between gap-1 relative bg-purple-600 sm:w-full">
        <div>
          <p className="text-[12px] sm:text-[10px] text-gray-300 font-semibold tracking-[1px]">
            Total Balance: &nbsp;
            <i
              onClick={() => toggleBalance()}
              className={`fa-regular ${
                isMainBalanceToggled ? "fa-eye" : "fa-eye-slash"
              } cursor-pointer font-bold`}
            ></i>
          </p>
          <p className="text-[30px] sm: mt-1 text-white font-2 tracking-[2px] font-normal">
            &#8358;{" "}
            {!isUserDataLoading ? (
              isMainBalanceToggled ? (
                Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(mainBalance)
              ) : (
                "* * * *"
              )
            ) : (
              <i className="fa-regular fa-spin fa-circle-notch text-[25px] text-gray-700"></i>
            )}
          </p>
        </div>

        <button className="w-full h-[50px] border-none outline-none rounded-[1.5rem] bg-white flex justify-center items-center text-gray-700 shadow-xl text-[20px] font-bold cursor-pointer">
          <p className="uppercase font-semibold text-[13px]">Deposit</p>
        </button>
      </div>
    </div>
  );
}

export default Balance;

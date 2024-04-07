import React from "react";
import Balance from "@/app/components/Balance";

function Home() {
  return (
    <div className="wrapper w-full h-full px-[3%]">
      <Balance />
      <div className="w-full actions my-10">
        <div className="w-full inner flex gap-8 sm:grid sm:gap-4 sm:grid-cols-4 sm:px-1">
          <div className="w-[150px] shadow-SM h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] rounded-2xl bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-phone text-purple-500 text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center">
              Airtime
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] shadow-SM h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] rounded-2xl bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-wifi text-pink-500 text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center">
              Data
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:bg-transparent sm:items-center sm:w-full sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] rounded-2xl bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-lightbulb-on text-blue-500 text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center">
              Bills
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] rounded-2xl bg-orgray-500 bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-money-bill-transfer text-orange-500 text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center">
              Convert
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Airtime to Cash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

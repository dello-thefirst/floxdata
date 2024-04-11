import React from "react";
import Balance from "@/app/components/Balance";

function Home() {
  return (
    <div className="wrapper w-full h-full px-[3%]">
      <div className="w-full h-auto mb-5">
        <div className="w-[140px] h-[35px] bg-white rounded-lg drop-shadow-md flex items-center gap-1 cursor-pointer justify-center text-[12px] sm:text-[10px] sm:w-[100px] sm:h-[25px]">
          Dashboard
          <i className="fa-solid fa-chart-pie"></i>
        </div>
      </div>
      <Balance />

      <div className="w-full flex py-5 text-[12px] sm:text-[10px] gap-2">
        <button className="quick-action-item sm:border-[0.2px] w-[130px] h-[35px] shadow-md rounded-lg flex gap-2 items-center justify-center">
          <span>Buy Data</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
        <button className="quick-action-item sm:border-[0.2px] w-[130px] h-[35px] shadow-md rounded-lg flex gap-2 items-center justify-center">
          <span>Buy Airtime</span>
          <i className="fa-regular fa-phone-flip"></i>
        </button>
      </div>

      <div className="w-full actions mb-5">
        <div className="w-full inner flex gap-8 sm:grid sm:gap-4 sm:grid-cols-4 sm:px-1">
          <div className="w-[150px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] border-[0.5px] border-gray-800/30 sm:w-[50px] sm:h-[50px] rounded-full bg-white flex gap-3 justify-center items-center cursor-pointer">
              <i className="fa-regular fa-phone text-black text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center sm:text-[10px]">
              Airtime
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] shadow-SM h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] border-[0.5px] border-gray-800/30 sm:w-[50px] sm:h-[50px] rounded-full bg-white flex gap-3 justify-center items-center cursor-pointer">
              <i className="fa-regular fa-sharp fa-wifi text-black text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center sm:text-[10px]">
              Data
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:bg-transparent sm:items-center sm:w-full sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] border-[0.5px] border-gray-800/30 sm:w-[50px] sm:h-[50px] rounded-full bg-white flex gap-3 justify-center items-center cursor-pointer">
              <i className="fa-regular fa-lightbulb-on text-black text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center sm:text-[10px]">
              Bills
            </p>
            <p className="text-gray-500 text-[11px] font-normal sm:hidden">
              Save up to 10%
            </p>
          </div>

          <div className="w-[150px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full sm:bg-transparent sm:items-center sm:p-0 sm:gap-2">
            <div className="w-[60px] h-[60px] border-[0.5px] border-gray-800/30  sm:w-[50px] sm:h-[50px] rounded-full bg-orgray-500 bg-white flex gap-3 justify-center items-center cursor-pointer">
              <i className="fa-regular fa-money-bill-transfer text-black text-[20px]"></i>
            </div>
            <p className="text-[13px] text-[var(--color-2)] sm:text-center sm:text-[10px]">
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

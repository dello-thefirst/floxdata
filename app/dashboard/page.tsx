import React from "react";
import Balance from "@/app/components/Balance";

function Home() {
  return (
    <div className="wrapper w-full h-full p-10 sm:p-[5%]">
      <Balance />
      <div className="w-full actions my-10">
        <p className="mb-5 hidden">Actions</p>
        <div className="w-full inner flex gap-8 sm:grid sm:gap-4 sm:grid-cols-2 sm:px-1">
          <div className="w-[140px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full">
            <div className="w-[60px] h-[60px] rounded-full bg-purple-500 bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-phone text-purple-500 text-[20px]"></i>
            </div>
            <p className="text-[14px] text-gray-300">Buy Airtime</p>
            <p className="text-gray-500 text-[11px]">Save up to 10%</p>
          </div>

          <div className="w-[140px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full">
            <div className="w-[60px] h-[60px] rounded-full bg-pink-500 bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-wifi text-pink-500 text-[20px]"></i>
            </div>
            <p className="text-[14px] text-gray-300">Buy Data</p>
            <p className="text-gray-500 text-[11px]">Save up to 10%</p>
          </div>

          <div className="w-[140px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full">
            <div className="w-[60px] h-[60px] rounded-full bg-blue-500 bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-lightbulb-on text-blue-500 text-[20px]"></i>
            </div>
            <p className="text-[14px] text-gray-300">Pay Bills</p>
            <p className="text-gray-500 text-[11px]">Save up to 10%</p>
          </div>

          <div className="w-[140px] h-auto rounded-xl bg-[var(--bg-secondary)] p-5 flex flex-col gap-5 sm:w-full">
            <div className="w-[60px] h-[60px] rounded-full bg-orange-500 bg-opacity-10 flex gap-3 shadow-xl justify-center items-center cursor-pointer">
              <i className="fa-regular fa-money-bill-transfer text-orange-500 text-[20px]"></i>
            </div>
            <p className="text-[14px] text-gray-300">Convert Airtime</p>
            <p className="text-gray-500 text-[11px]">Airtime to Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

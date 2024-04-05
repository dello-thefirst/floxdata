import React from "react";
import Balance from "@/app/components/Balance";

function Home() {
  return (
    <div className="wrapper w-full h-full p-10 sm:p-[5%]">
      <Balance />
      <div className="w-full actions my-10">
        <p className="mb-5 hidden">Actions</p>
        <div className="w-full inner flex gap-8 sm:gap-1 sm:justify-between sm:px-4">
          <div className="action-item flex flex-col gap-2 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-opacity-10 bg-[var(--bg-secondary)] flex gap-3  justify-center items-center cursor-pointer">
              <i className="fa-regular fa-phone text-purple-500 text-[20px]"></i>
            </div>
            <p className="text-[12px] font-light text-gray-300">Buy Airtime</p>
          </div>

          <div className="action-item flex flex-col gap-2 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-opacity-10 bg-[var(--bg-secondary)] flex gap-3  justify-center items-center cursor-pointer">
              <i className="fa-regular fa-wifi text-pink-500 text-[20px]"></i>
            </div>
            <p className="text-[12px] font-light text-gray-300">Buy Data</p>
          </div>

          <div className="action-item flex flex-col gap-2 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-opacity-10 bg-[var(--bg-secondary)] flex gap-3  justify-center items-center cursor-pointer">
              <i className="fa-sharp fa-regular fa-tv text-blue-500 text-[20px]"></i>
            </div>
            <p className="text-[12px] font-light text-gray-300">Cable TV</p>
          </div>

          <div className="action-item flex flex-col gap-2 items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-opacity-10 bg-[var(--bg-secondary)] flex gap-3  justify-center items-center cursor-pointer">
              <i className="fa-regular fa-lightbulb-on text-purple-800 text-[20px]"></i>
            </div>
            <p className="text-[12px] font-light text-gray-300">Electricity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

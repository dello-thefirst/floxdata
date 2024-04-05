import React from "react";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

function Home() {
  const userSessionId = cookies().get("user_session_id");
  if (!userSessionId) {
    redirect("/signup");
  }

  return (
    <section className="flex w-full h-full overflow-hidden">
      <Sidenav />
      <section className="w-full h-full">
        <Header />
        <div className="wrapper w-full h-full p-10 sm:p-[5%]">
          <Balance />
          <div className="w-full actions my-10">
            <p className="mb-5">Actions</p>
            <div className="w-full inner flex gap-6 sm:gap-1 sm:justify-between">
              <div className="action-item flex flex-col gap-2 items-center">
                <div className="w-[60px] h-[60px] rounded-full bg-opacity-10 bg-[var(--bg-secondary)] flex gap-3  justify-center items-center cursor-pointer">
                  <i className="fa-regular fa-phone text-purple-500 text-[20px]"></i>
                </div>
                <p className="text-[12px] font-light text-gray-300">
                  Buy Airtime
                </p>
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
                <p className="text-[12px] font-light text-gray-300">
                  Electricity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Home;

import Image from "next/image";
import React from "react";
import airtelLogo from "@/app/assets/logos/airtel.png";
import mtnLogo from "@/app/assets/logos/mtn.png";
import gloLogo from "@/app/assets/logos/glo.png";

export default function Buy() {
  return (
    <div className="wrapper w-full h-full px-[3%]">
      <div className="w-full h-auto mb-5">
        <div className="w-[160px] h-[35px] bg-white rounded-lg drop-shadow-md flex items-center gap-1 cursor-pointer justify-center text-[12px] sm:text-[10px] sm:w-[140px] sm:h-[25px]">
          Buy Data / Airtime
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-gray-100 h-[100px] p-5">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center gap-2">
              <Image
                src={airtelLogo}
                alt=""
                className="w-[40px] h-[40px] bg-gray-500 rounded-full"
              ></Image>
              <i className="fa-solid fa-caret-down"></i>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  <Image
                    src={airtelLogo}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full object-cover"
                  ></Image>
                  Airtel
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <Image
                    src={mtnLogo}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full object-cover"
                  ></Image>
                  MTN
                </a>
              </li>

              <li>
                <a>
                  {" "}
                  <Image
                    src={gloLogo}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full object-cover"
                  ></Image>
                  GLO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

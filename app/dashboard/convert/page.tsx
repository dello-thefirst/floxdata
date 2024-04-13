import React from "react";

export default function Convert() {
  return (
    <div className="wrapper w-full h-full px-[3%]">
      <div className="w-full h-auto mb-5">
        <div className="w-[140px] h-[35px] bg-white rounded-lg drop-shadow-md flex items-center gap-1 cursor-pointer justify-center text-[12px] sm:text-[10px] sm:w-[100px] sm:h-[25px]">
          Convert
          <i className="fa-solid fa-rotate"></i>
        </div>
      </div>
    </div>
  );
}

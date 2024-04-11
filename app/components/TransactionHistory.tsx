import Image from "next/image";
import React from "react";
import emptyState from "@/app/assets/images/empty_state.png";

function TransactionHistory() {
  return (
    <>
      <p className="text-[14px] sm:text-[12px] pl-1">Transaction History:</p>
      <div className="w-[60%] sm:w-full h-auto p-1 overflow-hidden flex flex-col items-center pb-7">
        <Image className="w-[300px] h-auto rounded-full" src={emptyState} alt=""></Image>
        <p className="text-[12px] sm:text-[10px] text-purple-500">Oops, no transaction found</p>
      </div>
    </>
  );
}

export default TransactionHistory;

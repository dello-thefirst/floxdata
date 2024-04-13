import Link from "next/link";
import React from "react";

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={`w-full fixed h-[50px] bg-gray-50 border-[0.1px] shad bottom-0 flex justify-center items-center px-7 ${className}`}
    >
      <ul className="w-full h-full items-center flex justify-between text-[20px]">
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-light fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-light fa-paper-plane"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-light fa-shuffle"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-light fa-wallet"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-light fa-user"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

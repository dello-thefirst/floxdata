import Link from "next/link";
import React from "react";

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={`w-full fixed h-[40px] bg-gray-50 shadow-2xl bottom-0 flex justify-center items-center px-[3%] ${className}`}
    >
      <ul className="w-full h-full items-center flex justify-between">
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-regular fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-regular fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-regular fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-regular fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <i className="fa-regular fa-house"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

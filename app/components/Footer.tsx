"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer({ className }: { className?: string }) {
  const page = usePathname();
  return (
    <div
      className={`w-full fixed h-[50px] bg-white border-[0.5px] shad bottom-0 flex justify-center items-center px-7 ${className}`}
    >
      <ul className="w-full h-full items-center flex justify-between text-[18px]">
        <li>
          <Link href={"/dashboard"}>
            <i
              className={`fa-light fa-house-blank ${
                page == "/dashboard" && "text-purple-600"
              }`}
            ></i>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/buy"}>
            <i className={`fa-light fa-paper-plane ${page == '/dashboard/buy' && 'text-purple-600'}`}></i>
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

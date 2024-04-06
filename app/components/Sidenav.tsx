import Logo from "./Logo";
import Link from "next/link";
import "@/app/styles/sidenav.css";
import Image from "next/image";
import profileSnippet from "@/app/assets/images/user_9606048.png";

export default function Sidenav() {
  return (
    <>
      <div className="w-auto h-screen py-[15px] bg-[var(--bg-secondary)] sm:w-full sm:hidden">
        <div className="w-full mx-auto px-[10px]">
          <Logo />

          <div className="w-full profile-snippet flex items-center flex-col justify-center mt-10 hidden">
            <Image
              className="w-[80px] bg-gray-400 rounded-full"
              src={profileSnippet}
              alt=""
            ></Image>
            <p className="name mt-2 text-gray-200 text-[15px]">Victor Faruna</p>
            <p className="username text-[11px] text-gray-400 font-light">
              @dello_
            </p>
          </div>

          <nav className="w-full mt-[40px]">
            <ul className="w-[150px] text-[11px] flex flex-col gap-3 text-[var(--color-2)]">
              <Link href={`/dashboard`}>
                <li className="flex gap-2 items-center hover:bg-purple-600 hover:bg-opacity-10 hover:text-white rounded-md px-[10px] py-[8px] ">
                  <i className="fa-light fa-house-blank"></i> Dashboard
                </li>
              </Link>
              <Link href={`/dashboard/transactions`}>
                <li className="flex gap-2 items-center bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-light fa-chart-simple"></i> Transactions
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-2 items-center bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-light fa-thin fa-shuffle"></i> Convert
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-2 items-center bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-light fa-wallet"></i> Wallet
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-2 items-center bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-light fa-user"></i> Profile
                </li>
              </Link>
              <Link href={``}>
                <li className="flex gap-2 items-center bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-light fa-user"></i> Logout
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

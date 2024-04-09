import Logo from "./Logo";
import Link from "next/link";
import "@/app/styles/sidenav.css";
import Image from "next/image";
import profileSnippet from "@/app/assets/images/user_9606048.png";

export default function Sidenav() {
  return (
    <>
      <div className="w-auto h-screen bg-black sm:w-full sm:hidden">
        <div className="w-full mx-auto">
          <div className="py-5 px-2 text-[15px] border-b border-gray-600">
            <Logo />
          </div>

          <nav className="w-full mt-[40px]">
            <ul className="w-[180px] text-[11px] flex flex-col gap-5 text-gray-300">
              <Link href={`/dashboard`}>
                <li className="flex gap-5 hover:bg-purple-600 hover:bg-opacity-10 hover:text-white rounded-md px-[10px] py-[8px] ">
                  <i className="fa-thin text-[18px] fa-house"></i> Dashboard
                </li>
              </Link>
              <Link href={`/dashboard/transactions`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-paper-plane"></i>{" "}
                  Transactions
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-shuffle"></i> Convert
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-wallet"></i> Wallet
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-user"></i> Profile
                </li>
              </Link>
              <Link href={``}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-user"></i> Logout
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

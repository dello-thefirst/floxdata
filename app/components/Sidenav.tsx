import Logo from "./Logo";
import Link from "next/link";
import "@/app/styles/sidenav.css";

export default function Sidenav() {
  return (
    <>
      <div className="w-auto h-screen bg-black sm:w-full sm:hidden">
        <div className="w-full mx-auto">
          <div className="py-5 px-5 text-[17px] border-b border-gray-600">
            <Logo color="light" />
          </div>

          <nav className="w-full mt-[40px] px-3">
            <ul className="w-[180px] text-[11px] flex flex-col gap-5 text-gray-300">
              <Link href={`/dashboard`}>
                <li className="flex gap-5 hover:bg-purple-600 hover:bg-opacity-10 hover:text-white rounded-md px-[10px] py-[8px] ">
                  <i className="fa-thin text-[18px] fa-house"></i>
                  <span className="">Dashboard</span>
                </li>
              </Link>
              <Link href={`/dashboard/buy`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-paper-plane"></i>{" "}
                  <span>Buy Data</span>
                </li>
              </Link>
              <Link href={`/dashboard/convert`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-shuffle"></i>{" "}
                  <span>Convert</span>
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-wallet"></i>{" "}
                  <span>Wallet</span>
                </li>
              </Link>
              <Link href={`/`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-user"></i>{" "}
                  <span>Profile</span>
                </li>
              </Link>
              <Link href={`/api/user/logout`}>
                <li className="flex gap-5 bg-opacity-10 rounded-md px-[10px] py-[8px]">
                  <i className="fa-thin text-[18px] fa-right-from-bracket"></i>{" "}
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

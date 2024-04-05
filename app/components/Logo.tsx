import Image from "next/image";
import LogoImage from "@/app/assets/images/Untitled-1.png";

export default function Logo() {
  return (
    <div className="flex w-full justify-center">
      <Image className="w-[30px]" src={LogoImage} alt=""></Image>
      <p className="logo text-gray-300 text-[15px] font-medium text-center">
        flox<span className="text-[#ff6aa1] font-bold">Data</span>
      </p>
    </div>
  );
}

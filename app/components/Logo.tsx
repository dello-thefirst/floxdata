import Image from "next/image";
import LogoImage from "@/app/assets/images/Untitled-1.png";

export default function Logo() {
  return (
    <div className="flex w-full gap-2">
      <Image className="w-[25px]" src={LogoImage} alt=""></Image>
      <p className="logo text-gray-400 font-light uppercase tracking-wide">
        flox<span className="text-[#ff6aa1]">Data</span>
      </p>
    </div>
  );
}

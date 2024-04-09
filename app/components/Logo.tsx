import Image from "next/image";
import LogoImage from "@/app/assets/images/Untitled-1.png";

export default function Logo({ color }: { color?: string }) {
  return (
    <div className="flex w-full gap-2">
      <Image className="w-[25px] hidden" src={LogoImage} alt=""></Image>
      <p className="logo  font-light uppercase tracking-wide">
        <span
          className={
            color === "light"
              ? "text-gray-500 font-light"
              : "text-black font-light"
          }
        >
          flox
        </span>
        <span className="text-purple-400 font-light">Data</span>
      </p>
    </div>
  );
}

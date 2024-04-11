import Image from "next/image";
import LogoImage from "@/app/assets/images/Untitled-1.png";

export default function Logo({ color }: { color?: string }) {
  return (
    <div className="flex w-full gap-2">
      <Image className="w-[25px] hidden" src={LogoImage} alt=""></Image>
      <p className="logo  font-normal uppercase tracking-wide">
        <span
          className={
            color === "light"
              ? "text-gray-300 font-normal"
              : "text-black font-normal"
          }
        >
          flox
        </span>
        <span className="text-purple-600 font-light">Data</span>
      </p>
    </div>
  );
}

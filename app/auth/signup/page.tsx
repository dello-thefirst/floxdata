import axios from "axios";
import Logo from "../../components/Logo";
import SignupForm from "@/app/components/SignupForm";
import LoginVector from "@/app/assets/images/login_vector.svg";
import Image from "next/image";
export default function Page() {
  //...
  return (
    <main className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)]">
      <div className="inner w-[600px] h-[70vh] flex shadow-xl rounded-xl overflow-hidden">
        <div className="w-full h-auto bg-white flex items-center justify-center p-10">
          <div>
            <Logo />
            <SignupForm />
          </div>
        </div>
        <div className="sidepart w-full h-full bg-purple-500 flex items-center justify-center p-10">
          <Image src={LoginVector} alt=""></Image>
        </div>
      </div>
    </main>
  );
}

import Logo from "../../components/Logo";
import LoginForm from "@/app/components/LoginForm";
import LoginVector from "@/app/assets/images/login_vector.svg";
import Image from "next/image";
export default function Page() {
  //...
  return (
    <main className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)]">
      <div className="inner w-[650px] h-[70vh] flex shadow-xl rounded-xl overflow-hidden">
        <div className="w-full h-auto bg-white flex items-center justify-center p-10">
          <div>
            <div className="w-full h-auto flex justify-center items-center text-center">
              <Logo />
            </div>
            <LoginForm />
          </div>
        </div>
        <div className="sidepart w-full h-full bg-purple-500 flex items-center justify-center p-10 sm:hidden">
          <Image src={LoginVector} alt=""></Image>
        </div>
      </div>
    </main>
  );
}

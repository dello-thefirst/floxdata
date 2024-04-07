import axios from "axios";
import Logo from "../../components/Logo";
import LoginForm from "@/app/components/LoginForm";



export default function Page() {
  //...
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="w-[320px] h-auto bg-[var(--bg-secondary)] rounded-lg shadow-xl p-10 sm:w-[90%]">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
}

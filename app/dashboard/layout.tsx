import React from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const userSessionId = cookies().get("user_session_id");
if (!userSessionId) {
  redirect("/signup");
}
export default function DashboardLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full h-full">
      <Sidenav />
      <section className="w-full h-full">
        <Header />
        {children}
      </section>
    </section>
  );
}

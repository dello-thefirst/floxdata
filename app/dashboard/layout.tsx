import React from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import SessionCheck from "./SessionCheck";
import Footer from "../components/Footer";

export default function DashboardLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionCheck>
      <section className="flex w-full h-full">
        <Sidenav />
        <section className="w-full h-screen overflow-auto">
          <Header />
          {children}
          <Footer className="hidden sm:block"></Footer>
        </section>
      </section>
    </SessionCheck>
  );
}

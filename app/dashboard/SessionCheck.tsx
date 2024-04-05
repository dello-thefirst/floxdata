import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function SessionCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSessionId = cookies().get("user_session_id");
  if (!userSessionId) {
    redirect("/login");
  }
  return <div> {children}</div>;
}

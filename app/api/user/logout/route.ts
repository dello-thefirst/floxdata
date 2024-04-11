import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const userSessionId = cookies().get("user_session_id");
  if (userSessionId && userSessionId.value) {
    cookies().delete("user_session_id");
    redirect("/auth/login");
  } else {
    redirect("/dashboard");
  }
}

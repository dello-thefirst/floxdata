import { cookies } from "next/headers";

export async function GET({ params }: { params: { username: string } }) {
  const userSessionId = cookies().get("user_session_id");
  if (userSessionId && JSON.parse(userSessionId.value) == params.username) {
    cookies().delete("user_session_id");
    return new Response(JSON.stringify({ message: "User Logged Out" }));
  } else {
    return new Response(JSON.stringify({ message: "Logout Failed" }));
  }
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const userSessionId = cookies().get("user_session_id")?.value as string;
  if (userSessionId) {
    const session_string = userSessionId;
    try {
      const getUser = await prisma.user.findUnique({
        where: {
          session_string: session_string,
        },
      });
      if (getUser) {
        const { password, ...otherUserDetails } = getUser;
        return new Response(JSON.stringify(otherUserDetails), {
          headers: { "Content-Type": "application/json" },
          status: 201,
        });
      } else {
        return new Response(JSON.stringify({ message: "User not found" }), {
          headers: { "Content-Type": "application/json" },
          status: 404,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ message: "An error ocurred" }), {
        headers: { "Content-Type": "application/json" },
        status: 401,
      });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return new Response(JSON.stringify({ message: "User Session not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 403,
    });
  }
}

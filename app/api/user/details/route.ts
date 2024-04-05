import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const userSessionId = cookies().get("user_session_id")?.value as string;
  if (userSessionId) {
    const username = JSON.parse(userSessionId);
    try {
      const getUser = await prisma.user.findUniqueOrThrow({
        where: {
          username: username,
        },
        include: {
          account_balance: true,
        },
      });
      if (getUser) {
        const { password, ...otherUserDetails } = getUser;
        return new Response(JSON.stringify(otherUserDetails), {
          headers: { "Content-Type": "application/json" },
          status: 201,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ message: "An error ocurred" }), {
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      await prisma.$disconnect();
    }
  }
}

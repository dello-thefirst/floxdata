import { PrismaClient, User } from "@prisma/client";
import { cookies } from "next/headers";
const prisma = new PrismaClient();
//...
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const addUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
      },
    });
    cookies().set("user_session_id", JSON.stringify(body.username));
    return new Response(JSON.stringify({ addUser }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "An error ocurred" }), {
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  const userSessionId = cookies().get("user_session_id")?.value as string;
  if (userSessionId) {
    const username = JSON.parse(userSessionId);
    try {
      const getUser = await prisma.user.findUnique({
        where: {
          username: username,
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

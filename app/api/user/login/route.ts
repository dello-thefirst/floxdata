import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
const prisma = new PrismaClient();
//...
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const loginUser = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: body.username,
          },
          {
            email: body.username,
          },
        ],
      },
    });
    if (loginUser[0].password === body.password) {
      cookies().set({
        name: "user_session_id",
        value: loginUser[0].session_string,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      return new Response(JSON.stringify({ loginUser }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
    } else {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        headers: { "Content-Type": "application/json" },
        status: 202,
        statusText: "Incorrect Username or Password!",
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      headers: { "Content-Type": "application/json" },
      status: 202,
      statusText: "Incorrect Username or Password!",
    });
  } finally {
    await prisma.$disconnect();
  }
}

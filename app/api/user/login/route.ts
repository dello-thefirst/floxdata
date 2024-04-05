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
    if (loginUser && loginUser[0].password === body.password) {
      cookies().set("user_session_id", JSON.stringify(body.username));
      return new Response(JSON.stringify({ loginUser }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
    } else {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        headers: { "Content-Type": "application/json" },
        status: 401,
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

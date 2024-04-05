import { PrismaClient } from "@prisma/client";
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
        account_balance: {
          create: {},
        },
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
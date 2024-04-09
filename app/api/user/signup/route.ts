import { PrismaClient, User } from "@prisma/client";
import { cookies } from "next/headers";
import { generateSessionString } from "@/app/functions/user";
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
        account_balance: 0,
        session_string: generateSessionString(22),
      },
    });
    cookies().set("user_session_id", addUser.session_string);
    return new Response(JSON.stringify({ addUser }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "An error ocurred" }), {
      headers: { "Content-Type": "application/json" },
      status: 401,
    });
  } finally {
    await prisma.$disconnect();
  }
}

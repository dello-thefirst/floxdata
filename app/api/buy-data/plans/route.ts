import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
  const prisma = new PrismaClient();
  const { searchParams } = new URL(req.url);
  try {
    const getPlans = await prisma.plans.findMany({
      where: {
        network: searchParams.get("network") as string,
      },
    });
    return new Response(JSON.stringify(getPlans), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect;
  }
}

-- CreateTable
CREATE TABLE "Plans" (
    "id" SERIAL NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "plan_type" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "network_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "validity" INTEGER NOT NULL,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("id")
);

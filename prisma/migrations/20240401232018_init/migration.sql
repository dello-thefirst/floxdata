-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "main_balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "referral_balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "coupon_balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Balance_userId_key" ON "Balance"("userId");

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

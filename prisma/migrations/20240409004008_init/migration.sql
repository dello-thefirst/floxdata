/*
  Warnings:

  - A unique constraint covering the columns `[session_string]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `session_string` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "session_string" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_session_string_key" ON "User"("session_string");

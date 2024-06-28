/*
  Warnings:

  - You are about to drop the column `emailId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `internalDate` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `labelIds` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `mailId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `snippet` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `threadId` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `emailId` on the `EmailRef` table. All the data in the column will be lost.
  - You are about to drop the column `emailId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Body` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Headers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payload` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `body` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bodyHtml` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `EmailRef` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailRef" DROP CONSTRAINT "EmailRef_userId_fkey";

-- DropForeignKey
ALTER TABLE "Headers" DROP CONSTRAINT "Headers_partsId_fkey";

-- DropForeignKey
ALTER TABLE "Headers" DROP CONSTRAINT "Headers_payloadId_fkey";

-- DropForeignKey
ALTER TABLE "Parts" DROP CONSTRAINT "Parts_bodyId_fkey";

-- DropForeignKey
ALTER TABLE "Parts" DROP CONSTRAINT "Parts_payloadId_fkey";

-- DropForeignKey
ALTER TABLE "Payload" DROP CONSTRAINT "Payload_bodyId_fkey";

-- DropForeignKey
ALTER TABLE "Payload" DROP CONSTRAINT "Payload_emailId_fkey";

-- DropIndex
DROP INDEX "Email_emailId_key";

-- DropIndex
DROP INDEX "Email_mailId_key";

-- DropIndex
DROP INDEX "EmailRef_emailId_key";

-- DropIndex
DROP INDEX "EmailRef_mailId_key";

-- DropIndex
DROP INDEX "User_emailId_key";

-- AlterTable
ALTER TABLE "Email" DROP COLUMN "emailId",
DROP COLUMN "internalDate",
DROP COLUMN "labelIds",
DROP COLUMN "mailId",
DROP COLUMN "snippet",
DROP COLUMN "threadId",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "bodyHtml" TEXT NOT NULL,
ADD COLUMN     "recipients" TEXT[],
ADD COLUMN     "sender" TEXT NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EmailRef" DROP COLUMN "emailId",
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailId",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "Body";

-- DropTable
DROP TABLE "Headers";

-- DropTable
DROP TABLE "Parts";

-- DropTable
DROP TABLE "Payload";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailRef" ADD CONSTRAINT "EmailRef_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailRef" ADD CONSTRAINT "EmailRef_mailId_fkey" FOREIGN KEY ("mailId") REFERENCES "Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

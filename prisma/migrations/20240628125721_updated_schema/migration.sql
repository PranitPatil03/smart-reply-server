/*
  Warnings:

  - The primary key for the `Body` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `payloadId` on the `Email` table. All the data in the column will be lost.
  - The primary key for the `Payload` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `body` on the `Payload` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `Payload` table. All the data in the column will be lost.
  - You are about to drop the column `headers` on the `Payload` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `Payload` table. All the data in the column will be lost.
  - You are about to drop the `Header` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[partsId]` on the table `Body` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mailId]` on the table `Email` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mailId` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Body" DROP CONSTRAINT "Body_payloadId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_userId_fkey";

-- DropForeignKey
ALTER TABLE "Header" DROP CONSTRAINT "Header_payloadId_fkey";

-- DropIndex
DROP INDEX "Email_payloadId_key";

-- AlterTable
ALTER TABLE "Body" DROP CONSTRAINT "Body_pkey",
ADD COLUMN     "partsId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "payloadId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Body_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Body_id_seq";

-- AlterTable
ALTER TABLE "Email" DROP CONSTRAINT "Email_pkey",
DROP COLUMN "payloadId",
ADD COLUMN     "mailId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Email_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Email_id_seq";

-- AlterTable
ALTER TABLE "Payload" DROP CONSTRAINT "Payload_pkey",
DROP COLUMN "body",
DROP COLUMN "filename",
DROP COLUMN "headers",
DROP COLUMN "mimeType",
ADD COLUMN     "bodyId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Payload_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Payload_id_seq";

-- DropTable
DROP TABLE "Header";

-- CreateTable
CREATE TABLE "EmailRef" (
    "id" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "mailId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "EmailRef_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headers" (
    "id" TEXT NOT NULL,
    "payloadId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "partsId" TEXT,

    CONSTRAINT "Headers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parts" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "bodyId" TEXT,
    "payloadId" TEXT NOT NULL,

    CONSTRAINT "Parts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailRef_emailId_key" ON "EmailRef"("emailId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailRef_mailId_key" ON "EmailRef"("mailId");

-- CreateIndex
CREATE UNIQUE INDEX "Parts_bodyId_key" ON "Parts"("bodyId");

-- CreateIndex
CREATE UNIQUE INDEX "Body_partsId_key" ON "Body"("partsId");

-- CreateIndex
CREATE UNIQUE INDEX "Email_mailId_key" ON "Email"("mailId");

-- AddForeignKey
ALTER TABLE "EmailRef" ADD CONSTRAINT "EmailRef_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payload" ADD CONSTRAINT "Payload_bodyId_fkey" FOREIGN KEY ("bodyId") REFERENCES "Body"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headers" ADD CONSTRAINT "Headers_payloadId_fkey" FOREIGN KEY ("payloadId") REFERENCES "Payload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headers" ADD CONSTRAINT "Headers_partsId_fkey" FOREIGN KEY ("partsId") REFERENCES "Parts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parts" ADD CONSTRAINT "Parts_bodyId_fkey" FOREIGN KEY ("bodyId") REFERENCES "Body"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parts" ADD CONSTRAINT "Parts_payloadId_fkey" FOREIGN KEY ("payloadId") REFERENCES "Payload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

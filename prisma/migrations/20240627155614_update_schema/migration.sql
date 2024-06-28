/*
  Warnings:

  - The primary key for the `Body` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Body` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Email` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Email` table. All the data in the column will be lost.
  - The `id` column on the `Email` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Header` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Header` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Payload` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Payload` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `payloadId` on the `Body` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `payloadId` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Email` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `payloadId` on the `Header` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `headers` to the `Payload` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Body" DROP CONSTRAINT "Body_payloadId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_payloadId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_userId_fkey";

-- DropForeignKey
ALTER TABLE "Header" DROP CONSTRAINT "Header_payloadId_fkey";

-- DropIndex
DROP INDEX "Body_payloadId_key";

-- AlterTable
ALTER TABLE "Body" DROP CONSTRAINT "Body_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "payloadId",
ADD COLUMN     "payloadId" INTEGER NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ADD CONSTRAINT "Body_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Email" DROP CONSTRAINT "Email_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "payloadId",
ADD COLUMN     "payloadId" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ADD CONSTRAINT "Email_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Header" DROP CONSTRAINT "Header_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "payloadId",
ADD COLUMN     "payloadId" INTEGER NOT NULL,
ADD CONSTRAINT "Header_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payload" DROP CONSTRAINT "Payload_pkey",
ADD COLUMN     "body" JSONB,
ADD COLUMN     "filename" TEXT,
ADD COLUMN     "headers" JSONB NOT NULL,
ADD COLUMN     "mimeType" TEXT,
ADD COLUMN     "partId" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Payload_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Email_payloadId_key" ON "Email"("payloadId");

-- AddForeignKey
ALTER TABLE "Payload" ADD CONSTRAINT "Payload_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Email"("emailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Header" ADD CONSTRAINT "Header_payloadId_fkey" FOREIGN KEY ("payloadId") REFERENCES "Payload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_payloadId_fkey" FOREIGN KEY ("payloadId") REFERENCES "Payload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

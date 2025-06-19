/*
  Warnings:

  - The primary key for the `ContactForm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `businessName` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `projectType` on the `ContactForm` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ContactForm` table. All the data in the column will be lost.
  - The `id` column on the `ContactForm` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `contactNumber` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experienceLevel` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hardLimits` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthConcerns` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `howFoundMe` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identity` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interests` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recentReference` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionDateTime` to the `ContactForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionLength` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactForm" DROP CONSTRAINT "ContactForm_pkey",
DROP COLUMN "businessName",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "location",
DROP COLUMN "message",
DROP COLUMN "phoneNumber",
DROP COLUMN "projectType",
DROP COLUMN "updatedAt",
ADD COLUMN     "contactNumber" TEXT NOT NULL,
ADD COLUMN     "experienceLevel" TEXT NOT NULL,
ADD COLUMN     "hardLimits" TEXT NOT NULL,
ADD COLUMN     "healthConcerns" TEXT NOT NULL,
ADD COLUMN     "howFoundMe" TEXT NOT NULL,
ADD COLUMN     "identity" TEXT NOT NULL,
ADD COLUMN     "interests" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "recentReference" TEXT NOT NULL,
ADD COLUMN     "sessionDateTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sessionLength" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id");

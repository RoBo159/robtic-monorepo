/*
  Warnings:

  - You are about to drop the column `email` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `panelId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PanelType" AS ENUM ('BUTTON', 'MENU');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'CLOSED');

-- DropIndex
DROP INDEX "Ticket_email_key";

-- DropIndex
DROP INDEX "Ticket_username_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "email",
DROP COLUMN "username",
ADD COLUMN     "claimer" TEXT,
ADD COLUMN     "data" JSONB,
ADD COLUMN     "embed" JSONB,
ADD COLUMN     "panelId" TEXT NOT NULL,
ADD COLUMN     "status" "TicketStatus" NOT NULL DEFAULT 'OPEN';

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "config" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Panel" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PanelType" NOT NULL,
    "placeholder" TEXT,
    "templateId" TEXT,
    "embed" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Panel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PanelTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PanelTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketPanel" (
    "id" TEXT NOT NULL,
    "panelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "emoji" TEXT,
    "style" TEXT NOT NULL,
    "hasForm" BOOLEAN NOT NULL DEFAULT false,
    "maintenance" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "formId" TEXT,
    "data" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TicketPanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "placeholder" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "style" TEXT NOT NULL DEFAULT 'SHORT',
    "minLength" INTEGER,
    "maxLength" INTEGER,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ButtonData" (
    "id" TEXT NOT NULL,
    "ticketPanelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "emoji" TEXT,
    "config" JSONB,

    CONSTRAINT "ButtonData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PanelTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketPanel" ADD CONSTRAINT "TicketPanel_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "Panel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketPanel" ADD CONSTRAINT "TicketPanel_formId_fkey" FOREIGN KEY ("formId") REFERENCES "FormData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "TicketPanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_formId_fkey" FOREIGN KEY ("formId") REFERENCES "FormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ButtonData" ADD CONSTRAINT "ButtonData_ticketPanelId_fkey" FOREIGN KEY ("ticketPanelId") REFERENCES "TicketPanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

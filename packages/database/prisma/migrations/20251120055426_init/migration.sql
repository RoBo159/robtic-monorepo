/*
  Warnings:

  - You are about to drop the column `channelId` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "channelId",
ADD COLUMN     "userId" TEXT DEFAULT '';

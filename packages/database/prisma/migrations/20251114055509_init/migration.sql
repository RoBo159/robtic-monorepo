/*
  Warnings:

  - The `channels` column on the `TicketPanel` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TicketPanel" DROP COLUMN "channels",
ADD COLUMN     "channels" JSONB;

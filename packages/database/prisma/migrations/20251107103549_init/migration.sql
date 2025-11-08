-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_username_key" ON "Ticket"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_email_key" ON "Ticket"("email");

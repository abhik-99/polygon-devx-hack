-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "photo" TEXT
);

-- CreateTable
CREATE TABLE "WalletAddress" (
    "walletAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "WalletAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WalletAddress_walletAddress_key" ON "WalletAddress"("walletAddress");

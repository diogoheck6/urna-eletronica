-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "candidatos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "partido" TEXT NOT NULL,
    "imagemUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "candidatos_numero_key" ON "candidatos"("numero");

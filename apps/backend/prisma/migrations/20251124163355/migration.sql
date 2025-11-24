/*
  Warnings:

  - You are about to drop the `candidatos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "candidatos";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "usuarios";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_flashCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "flashCards_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_flashCards" ("answer", "created_at", "id", "id_user", "question") SELECT "answer", "created_at", "id", "id_user", "question" FROM "flashCards";
DROP TABLE "flashCards";
ALTER TABLE "new_flashCards" RENAME TO "flashCards";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

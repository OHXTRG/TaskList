-- CreateTable
CREATE TABLE "SubSubTasks" (
    "id" UUID NOT NULL,
    "parentId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "estimatedTime" INTEGER NOT NULL,
    "isStarted" BOOLEAN NOT NULL DEFAULT false,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "inProgress" BOOLEAN NOT NULL DEFAULT false,
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "actualTime" INTEGER,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SubSubTasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubSubTasks" ADD CONSTRAINT "SubSubTasks_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "SubTasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

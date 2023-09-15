-- CreateTable
CREATE TABLE "TreeStructure" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "parentId" INTEGER,
    "childrenIds" INTEGER[],

    CONSTRAINT "TreeStructure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "groupId" INTEGER,
    "sourceChannel" INTEGER,
    "type" INTEGER,
    "templateUrl" TEXT,
    "templateFileId" INTEGER,
    "templateFileName" TEXT,
    "demoFileId" INTEGER,
    "demoFileName" TEXT,
    "demoUrl" TEXT,
    "demoDescription" TEXT,
    "templateCusContent" TEXT,
    "legalSizeLimit" TEXT,
    "legalFormats" TEXT,
    "legalPageSize" INTEGER,
    "legalIsShare" INTEGER,
    "tree_structure_id" INTEGER NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_tree_structure_id_fkey" FOREIGN KEY ("tree_structure_id") REFERENCES "TreeStructure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

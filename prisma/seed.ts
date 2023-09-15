import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const treeStructures = [];
  const materials = [];

  for (let i = 0; i < 10; i++) {
    treeStructures.push({
      name: faker.commerce.productName(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    });
  }

  for (let i = 0; i < 50; i++) {
    materials.push({
      name: faker.commerce.productName(),
      code: faker.random.alphaNumeric(10),
      groupId: faker.datatype.number({ min: 1, max: 10 }),
      sourceChannel: faker.datatype.number({ min: 1, max: 10 }),
      type: faker.datatype.number({ min: 1, max: 10 }),
      templateUrl: faker.internet.url(),
      templateFileId: faker.datatype.number(),
      templateFileName: faker.system.fileName(),
      demoFileId: faker.datatype.number(),
      demoFileName: faker.system.fileName(),
      demoUrl: faker.internet.url(),
      demoDescription: faker.lorem.sentence(),
      templateCusContent: faker.lorem.paragraph(),
      legalSizeLimit: faker.random.word(),
      legalFormats: faker.system.fileExt(),
      legalPageSize: faker.datatype.number({ min: 1, max: 100 }),
      legalIsShare: faker.datatype.number({ min: 0, max: 1 }),
      treeStructureId: faker.datatype.number({ min: 1, max: 10 }),
    });
  }

  await prisma.treeStructure.createMany({ data: treeStructures });
  await prisma.material.createMany({ data: materials });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

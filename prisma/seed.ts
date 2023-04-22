import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const mark = await prisma.user.create({
    data: {
      username: "mark",
    },
  });
  const alice = await prisma.user.create({
    data: {
      username: "alice",
    },
  });

  console.log(mark, alice);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

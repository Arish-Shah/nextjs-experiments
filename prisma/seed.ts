import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("jack", 12);
  const jack = await prisma.user.upsert({
    where: { username: "jack" },
    update: {},
    create: {
      username: "jack",
      password,
    },
  });

  console.log({ jack });
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

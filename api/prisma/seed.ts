import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { designs } from "./data/designs";
import { users } from "./data/users";

const prisma = new PrismaClient();

async function createDesign() {
  for (let design of designs) {
    await prisma.design.create({
      data: design,
    });
  }
}

async function createUser() {
  for (let user of users) {
    const password = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        ...user,
        password,
      },
    });
  }
}

async function main() {
  await createDesign();
  await createUser();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

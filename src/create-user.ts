import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query", "error"] });

async function main() {
  await prisma.user.create({
    data: {
      name: "Rinshu",
      email: "rinshu@prisma.io",
    },
  });
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

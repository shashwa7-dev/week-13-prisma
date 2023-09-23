import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});

// limit -> take(top n results) ,, offset -> skip(top n results)
async function main() {
  let res = await prisma.post.findMany({
    take: 3,
    skip: 1,
  });
  console.log(res);
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function createVideoCard(data) {
  for (const item of data) {
    await prisma.videoCard.create({
      data: {
        itemName: item.itemName,
        memory: item.memory,
        chipset: item.chipset,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
};

async function main() {
  const gpuJSON = fs.readFileSync('src/server/mock/prismaMockData/gpu.json', 'utf8');
  const gpuData = JSON.parse(gpuJSON);

  await createVideoCard(gpuData);

  await prisma.$disconnect();
  console.log('done')
}

main().catch((error) => {
  console.error(error);
});

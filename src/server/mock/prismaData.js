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
  console.log("Video Card done")
};

async function createcpu(data) {
  for (const item of data) {
    await prisma.cpu.create({
      data: {
        itemName: item.itemName,
        coreCount: item.coreCount,
        coreClock: item.coreClock,
        socket: item.socket,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Cpu done")
};

async function createCooler(data) {
  for (const item of data) {
    await prisma.cpuCooler.create({
      data: {
        itemName: item.itemName,
        size: item.size,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Cooler done")
};

async function createMotherboard(data) {
  for (const item of data) {
    await prisma.motherBoard.create({
      data: {
        itemName: item.itemName,
        socket: item.socket,
        formFactor: item.formFactor,
        memorySlots: item.memorySlots,
        memoryMax: item.memoryMax,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Motherboard done")
};

async function createMemory(data) {
  for (const item of data) {
    await prisma.memory.create({
      data: {
        itemName: item.itemName,
        speed: item.speed,
        modules: item.modules,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Memory done")
};

async function createStorage(data) {
  for (const item of data) {
    await prisma.storage.create({
      data: {
        itemName: item.itemName,
        capacity: item.capacity,
        type: item.type,
        formFactor: item.formFactor,
        interface: item.interface,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Storage done")
};

async function createCase(data) {
  for (const item of data) {
    await prisma.towerCase.create({
      data: {
        itemName: item.itemName,
        type: item.type,
        color: item.color,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Case done")
};

async function createPsu(data) {
  for (const item of data) {
    await prisma.psu.create({
      data: {
        itemName: item.itemName,
        type: item.type,
        wattage: item.wattage,
        color: item.color,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Psu done")
};

async function createMonitor(data) {
  for (const item of data) {
    await prisma.monitor.create({
      data: {
        itemName: item.itemName,
        size: item.size,
        resolution: item.resolution,
        refreshRate: item.refreshRate,
        responseTime: item.responseTime,
        panelType: item.panelType,
        aspectRatio: item.aspectRatio,
        store: item.store,
        link: item.link,
        price: item.price,
        image: item.image,
      },
    })
  }
  console.log("Monitor done")
};

async function main() {
  const gpuJSON = fs.readFileSync('src/server/mock/prismaMockData/gpu.json', 'utf8');
  const gpuData = JSON.parse(gpuJSON);

  const cpuJSON = fs.readFileSync('src/server/mock/prismaMockData/cpu.json', 'utf8');
  const cpuData = JSON.parse(cpuJSON);

  const cpuCoolerJSON = fs.readFileSync('src/server/mock/prismaMockData/cooler.json', 'utf8');
  const cpuCoolerData = JSON.parse(cpuCoolerJSON);

  const motherBoardJSON = fs.readFileSync('src/server/mock/prismaMockData/motherboard.json', 'utf8');
  const motherBoardData = JSON.parse(motherBoardJSON);

  const memoryJSON = fs.readFileSync('src/server/mock/prismaMockData/memory.json', 'utf8');
  const memoryData = JSON.parse(memoryJSON);

  const storageJSON = fs.readFileSync('src/server/mock/prismaMockData/storage.json', 'utf8');
  const storageData = JSON.parse(storageJSON);

  const towerCaseJSON = fs.readFileSync('src/server/mock/prismaMockData/towerCase.json', 'utf8');
  const towerCaseData = JSON.parse(towerCaseJSON);

  const psuJSON = fs.readFileSync('src/server/mock/prismaMockData/psu.json', 'utf8');
  const psuData = JSON.parse(psuJSON);

  const monitorJSON = fs.readFileSync('src/server/mock/prismaMockData/monitor.json', 'utf8');
  const monitorData = JSON.parse(monitorJSON);


  await createVideoCard(gpuData);
  await createcpu(cpuData);
  await createCooler(cpuCoolerData);
  await createMotherboard(motherBoardData);
  await createMemory(memoryData);
  await createStorage(storageData);
  await createCase(towerCaseData);
  await createPsu(psuData);
  await createMonitor(monitorData);

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
});

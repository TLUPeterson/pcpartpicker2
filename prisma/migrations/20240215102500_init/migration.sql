-- CreateTable
CREATE TABLE "VideoCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "chipset" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "CPU" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "coreCount" INTEGER NOT NULL,
    "coreClock" DECIMAL,
    "socket" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "CPUCooler" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "size" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Motherboard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "socket" TEXT,
    "formFactor" TEXT,
    "memorySlots" INTEGER,
    "memoryMax" INTEGER,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Memory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "speed" TEXT,
    "modules" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Storage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "formFactor" TEXT,
    "interface" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "TowerCase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "type" TEXT,
    "color" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "PSU" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "type" TEXT,
    "wattage" INTEGER NOT NULL,
    "color" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT,
    "price" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemName" TEXT NOT NULL,
    "size" DECIMAL NOT NULL,
    "resolution" TEXT NOT NULL,
    "refreshRate" INTEGER NOT NULL,
    "responseTime" DECIMAL,
    "panelType" TEXT,
    "aspectRatio" TEXT,
    "store" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image" TEXT
);

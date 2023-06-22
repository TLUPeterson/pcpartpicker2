import { createTRPCRouter } from "~/server/api/trpc";
import { videoCardRouter } from "./routers/videoCard";
import { towerCaseRouter } from "./routers/tower";
import { storageRouter } from "./routers/storage";
import { psuRouter } from "./routers/psu";
import { motherBoardRouter } from "./routers/motherboard";
import { monitorRouter } from "./routers/monitor";
import { memoryRouter } from "./routers/memory";
import { cpuRouter } from "./routers/cpu";
import { coolerRouter } from "./routers/cooler";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  videoCards: videoCardRouter,
  towerCases: towerCaseRouter,
  storages: storageRouter,
  psus: psuRouter,
  motherboards: motherBoardRouter,
  monitors: monitorRouter,
  memorys: memoryRouter,
  cpus: cpuRouter,
  cpuCoolers: coolerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

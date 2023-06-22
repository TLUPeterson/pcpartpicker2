import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cpuRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cpu.findMany();
  }),
});

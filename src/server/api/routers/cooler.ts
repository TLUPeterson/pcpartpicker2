import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coolerRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cpuCooler.findMany();
  }),
});

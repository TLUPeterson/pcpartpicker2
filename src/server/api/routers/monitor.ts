import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const monitorRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.monitor.findMany();
  }),
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const psuRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.psu.findMany();
  }),
});

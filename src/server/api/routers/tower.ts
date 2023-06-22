import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const towerCaseRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.towerCase.findMany();
  }),
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const motherBoardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.motherBoard.findMany();
  }),
});

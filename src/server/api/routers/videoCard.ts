import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const videoCardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.videoCard.findMany();
  }),
});

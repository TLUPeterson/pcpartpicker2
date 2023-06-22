import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const memoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.memory.findMany();
  }),
});

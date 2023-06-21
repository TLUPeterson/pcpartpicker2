import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany();
  }),
});

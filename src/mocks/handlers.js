import { rest } from "msw";
import { initialItems } from "../mocks/testData";

export const handlers = [
  rest.get("/api/fruits", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(initialItems));
  }),
];

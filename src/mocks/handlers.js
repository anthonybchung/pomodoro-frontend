import { rest } from "msw";

export const handlers = [
  rest.post("https://localhost:5000/api/v1/projects/", (req, res, ctx) => {
    const { userid, projectName, projectDescription } = req.body;

    if (userid === null) {
      return res(ctx.status(409), ctx.json({ error: "User I.D required" }));
    }
  }),
];

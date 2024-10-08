import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { responseError } from "@/core";

const app = new Elysia()
  .use(
    cors({
      methods: ["POST"],
      exposeHeaders: undefined,
      origin: Bun.env.CORS_ORIGIN?.split(",") ?? [],
    })
  )
  .get("/hello-world", () => "Hello World");

app.listen(Bun.env.PORT ?? 8081);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${Bun.env.PORT}`
);

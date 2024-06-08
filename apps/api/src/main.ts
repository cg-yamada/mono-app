import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app.module"

async function apiServer() {
  const SERVER_POST = 8000
  const server = await NestFactory.create(AppModule)
  // server.useGlobalPipes(new ValidationPipe())

  /** CORS許可 */
  server.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })

  await server.listen(SERVER_POST)
}

apiServer()

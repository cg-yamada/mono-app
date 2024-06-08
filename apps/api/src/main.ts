import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app.module"

async function apiServer() {
  const SERVER_POST = 8000
  const server = await NestFactory.create(AppModule)
  // server.useGlobalPipes(new ValidationPipe())
  await server.listen(SERVER_POST)
}

apiServer()

import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ChatsModule } from "./chats/chats.module"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env"] }), UsersModule, ChatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

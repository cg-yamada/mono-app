import { OnModuleInit } from "@nestjs/common"
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"
import { Server } from "socket.io"
import { NewChat, NewChatRequest } from "./chats.model"

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server

  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log(socket.id)
      console.log("Start websocket connection!!!!!")
    })
  }

  /** newMessageイベントを受信後、sendMessageイベントを発火する */
  @SubscribeMessage("newMessage")
  onnewMessage(@MessageBody() body: NewChatRequest) {
    console.log(body)
    const newChat: NewChat = {
      id: new Date().toISOString(),
      message: body.message,
      userId: body.userId,
    }
    this.server.emit("sendMessage", newChat)
  }
}

import { Injectable } from "@nestjs/common"
import type { User } from "./user.model"

@Injectable()
export class UsersService {
  findAll(): User[] {
    return [{ id: "1", name: "テスト太郎", email: "test@gmail.com" }]
  }
}

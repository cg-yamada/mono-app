import { BaseService } from "../baseService"
import { User } from "./types"

class UserService extends BaseService {
  /** ユーザー情報一覧を取得する */
  async getAll(): Promise<User[]> {
    const { data } = await this.api.GET("/users")
    console.log({ data })
    if (!data) return []

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
    }))
  }
}

export const userService = new UserService()

import { userService } from "@/services/userService"
import type { Metadata } from "next/types"
import { UsersContainer } from "./container"

/**
 * デフォルトは静的レンダリングであり、mockサーバーがローカルのみなので動的レンダリングを指定しています
 * APIの実装が完了すれば下記記載は削除できます
 */
export const dynamic: NextJS["dynamic"] = "force-dynamic"

export const metadata: Metadata = {
  title: "ユーザー情報",
  description: "ユーザー情報",
}

export default async function Page() {
  const users = await userService.getAll()

  return (
    <>
      <UsersContainer users={users} />
    </>
  )
}

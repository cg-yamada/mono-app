"use client"

import { Box, Button, Container, Group, List, ListItem, Text, Textarea } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { useState } from "react"
import io from "socket.io-client"
import { z } from "zod"

export const formSchema = z.object({
  message: z.string(),
})

interface Chat {
  id: string
  userId: string
  message: string
}

interface Input {
  userId: string
  message: string
}

const socket = io(process.env.NEXT_PUBLIC_API_URL)

export default function RootPage() {
  const form = useForm<Input>({
    validate: zodResolver(formSchema),
    initialValues: {
      message: "",
      userId: "1234",
    },
  })

  const [receivedChat, setReceivedChat] = useState<Chat[]>([])

  /** サーバーから受信する */
  socket.on("sendMessage", (recieved: Chat) => {
    console.log("recieved >>>", recieved)
    const newChat = [...receivedChat, recieved]
    setReceivedChat(newChat)
  })

  /** サーバーに送信する */
  const handleSubmit = async (input: Input) => {
    socket.emit("newMessage", input)
  }

  return (
    <Container py={40}>
      <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
        <Group mb={20}>
          <Textarea w={400} {...form.getInputProps("message")} label="メッセージ" />
        </Group>
        <Button type="submit" children="送信する" />
      </form>

      <Box mt={40}>
        <Text>Websocketによる送信結果</Text>
        <List listStyleType="none">
          {receivedChat.map((chat) => (
            <ListItem key={chat.id}>
              <Text>{`userId: ${chat.userId}`}</Text>
              <Text>{`メッセージ: ${chat.message}`}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export interface Chat {
  message: string
}

export interface NewChatRequest {
  userId: string
  message: string
}

export interface NewChat {
  id: string
  userId: string
  message: string
}

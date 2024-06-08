import createClient from "openapi-fetch"
import type { paths } from "./api"

export class BaseService {
  protected api
  constructor() {
    this.api = createClient<paths>({ baseUrl: process.env.NEXT_PUBLIC_API_URL })
  }
}

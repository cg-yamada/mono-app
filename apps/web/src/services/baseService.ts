import createClient from "openapi-fetch"
import type { paths } from "./api"

export class BaseService {
  protected api
  constructor() {
    this.api = createClient<paths>({ baseUrl: "https://api.sample.com/" })
  }
}

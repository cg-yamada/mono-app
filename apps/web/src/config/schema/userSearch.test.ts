import { describe, expect, test } from "vitest"

import { ERRORS } from "@/config/consts"
import { SearchUserFormInput, searchUserFormSchema } from "./userSearchSchema"

const correctInput: SearchUserFormInput = {
  name: "サンプル株式会社",
  email: "test@test.com",
}

describe("検索フォームのバリデーションテスト", () => {
  test.each([
    { ...correctInput, email: "failed.sample", expected: ERRORS.INVALID_EMAIL_TYPE },
    { ...correctInput, email: "failed@sample", expected: ERRORS.INVALID_EMAIL_TYPE },
  ])("異常系テスト", ({ expected, ...input }) => {
    expect(() => searchUserFormSchema.parse({ ...input })).toThrow(expected)
  })
  test.each([
    { ...correctInput, email: "" },
    { ...correctInput, email: "success@sample.com" },
  ])("正常系テスト", ({ ...input }) => {
    expect(searchUserFormSchema.safeParse({ ...input }).success).toBe(true)
  })
})

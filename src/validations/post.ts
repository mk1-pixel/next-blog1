import { z } from "zod"

export const postSchema = z.object({
  title: z.string()
    .min(3, { message: "タイトルは3文字以上入力してください" })
    .max(255, { message: "タイトルは255文字以内入力してください" }),
  content: z.string()
    .min(3, { message: "内容は3文字以上入力してください" }),
  topImage: z.instanceof(File).nullable().optional()
})
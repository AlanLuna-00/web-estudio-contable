import { getAllPosts, formatDate } from "@/lib/blog"
import { NextResponse } from "next/server"

export async function GET() {
  const posts = getAllPosts()

  const postsWithFormattedDate = posts.map((post) => ({
    ...post,
    formattedDate: formatDate(post.createdAt),
    // Don't send full content to the list endpoint
    content: undefined,
  }))

  return NextResponse.json(postsWithFormattedDate)
}

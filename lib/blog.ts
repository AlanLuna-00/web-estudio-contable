import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  createdAt: string // ISO timestamp
  /** URL https de imagen de portada (landing y listados) */
  coverImage?: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
        createdAt: data.createdAt || new Date().toISOString(),
        coverImage:
          typeof data.coverImage === "string" &&
          data.coverImage.trim() !== ""
            ? data.coverImage.trim()
            : undefined,
      }
    })

  // Sort by createdAt descending (newest first)
  return allPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    content,
    createdAt: data.createdAt || new Date().toISOString(),
    coverImage:
      typeof data.coverImage === "string" && data.coverImage.trim() !== ""
        ? data.coverImage.trim()
        : undefined,
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | Estudio Contable`,
    description: post.excerpt,
  }
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-foreground mt-8 mb-3">$1</h3>')
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-foreground mt-10 mb-4">$1</h2>')
  html = html.replace(/^#### (.*$)/gm, '<h4 class="text-base font-semibold text-foreground mt-6 mb-2">$1</h4>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')

  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(cell => cell.trim())
    if (cells.some(cell => cell.includes('---'))) {
      return ''
    }
    const isHeader = !html.split(match)[0].includes('<tbody>')
    const cellTag = isHeader ? 'th' : 'td'
    const cellClass = isHeader 
      ? 'px-4 py-2 text-left font-medium text-foreground bg-muted' 
      : 'px-4 py-2 text-muted-foreground border-t border-border'
    const row = cells.map(cell => `<${cellTag} class="${cellClass}">${cell.trim()}</${cellTag}>`).join('')
    return `<tr>${row}</tr>`
  })

  // Wrap tables
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
    return `<table class="w-full my-6 border border-border rounded-lg overflow-hidden"><tbody>${match}</tbody></table>`
  })

  // Lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 text-muted-foreground list-decimal">$1</li>')
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 text-muted-foreground list-disc">$1</li>')

  // Paragraphs (lines that don't start with < and aren't empty)
  html = html.split('\n').map(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('<') && !trimmed.startsWith('#') && !trimmed.startsWith('-') && !trimmed.match(/^\d+\./)) {
      return `<p class="text-muted-foreground leading-relaxed mb-4">${trimmed}</p>`
    }
    return line
  }).join('\n')

  // Clean up empty lines
  html = html.replace(/\n{3,}/g, '\n\n')

  return html
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = markdownToHtml(post.content)
  const createdDate = new Date(post.createdAt)
  const formattedCreatedAt = formatDate(post.createdAt)
  const timeString = createdDate.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground">
              Estudio Contable [NOMBRE]
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/#novedades">
                <ArrowLeft className="size-4 mr-2" />
                Volver
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {formattedCreatedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {timeString} hs
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-muted-foreground mb-8 pb-8 border-b border-border">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Button asChild variant="outline">
              <Link href="/#novedades">
                <ArrowLeft className="size-4 mr-2" />
                Ver todas las novedades
              </Link>
            </Button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Estudio Contable [NOMBRE]. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

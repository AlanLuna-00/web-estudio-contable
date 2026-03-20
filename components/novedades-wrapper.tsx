"use client";

import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  createdAt: string;
  formattedDate: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const INITIAL_VISIBLE = 3;

export function NovedadesWrapper() {
  const { data: posts, isLoading } = useSWR<BlogPost[]>("/api/posts", fetcher);
  const [showAll, setShowAll] = useState(false);

  const visiblePosts =
    posts && !showAll ? posts.slice(0, INITIAL_VISIBLE) : (posts ?? []);

  return (
    <section id="novedades" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Actualidad contable y fiscal
            </h2>
            <p className="text-muted-foreground">
              Mantenete informado sobre las últimas novedades tributarias.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: INITIAL_VISIBLE }).map((_, index) => (
                <Card key={index} className="border-border overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-16" />
                  </CardContent>
                </Card>
              ))
            ) : posts && posts.length > 0 ? (
              visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/novedades/${post.slug}`}
                  className="block"
                >
                  <Card className="group h-full hover:shadow-md transition-shadow border-border overflow-hidden">
                    <div className="aspect-video bg-secondary flex items-center justify-center">
                      <FileText className="size-12 text-muted-foreground" />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {post.formattedDate}
                      </p>
                      <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-foreground"
                        tabIndex={-1}
                      >
                        Ver más →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-8">
                No hay novedades disponibles.
              </p>
            )}
          </div>

          {!isLoading && posts && posts.length > INITIAL_VISIBLE && (
            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
              >
                {showAll
                  ? "Ver menos"
                  : `Ver más novedades (${posts.length - INITIAL_VISIBLE} más)`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

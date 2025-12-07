"use client";

import { useSearchParams } from "next/navigation";
import { Inbox } from "lucide-react";

import { Search } from "@/components/Search";
import { PostCard } from "./components/PostCard";
import { allPosts, Post } from "contentlayer/generated";
import { PostGridCard } from "./components/PostGridCard";

export type BlogProps = {
  posts: Post[];
};
export const Blog = ({ posts }: BlogProps) => {
  const router = useSearchParams();
  const query = router?.get("q") ?? "";
  const pageTitle = query
    ? `Resultados para "${query}"`
    : "Dicas e estrategias pra impulsionar seu negócio";

  const post = query
    ? allPosts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : allPosts;

  const hasPost = post.length > 0;
  return (
    <div className="flex flex-col flex-grow h-full py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-x-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4 ">
            <span className="px-4 py-2 text-center rounded-md body-tag text-cyan-100 bg-cyan-300 w-fit md:text-left">
              blog
            </span>
            <h1 className="max-w-2xl text-gray-100 text-balance text-start md:text-left text-heading-lg md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>
      {hasPost && (
        <PostGridCard>
          {post.map((item) => (
            <PostCard
              key={item._id}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              date={new Date(item.date).toLocaleDateString("pt-BR")}
              author={{
                name: String(item.author?.name || ""),
                avatar: String(item.author?.avatar || ""),
              }}
            />
          ))}
        </PostGridCard>
      )}
      {!hasPost && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 p-8 border-2 border-gray-300 border-dashed rounded-lg md-12">
            <Inbox className="w-12 h-12 text-cyan-100" />
            <p className="text-center text-gray-100">Nenhum post encontrado</p>
          </div>
        </div>
      )}
    </div>
  );
};

import { Avatar } from "@/components/Avatar";
import { MarkDown } from "@/components/MarkDown";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/useShare";
import { allPosts, Post } from "contentlayer/generated";

import React from "react";

export type BlogPostPageProps = {
  post: Post;
};

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const postUrl = `https://site.set/blog/${post?.slug}`;
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });
  return (
    <main className="mt-32 text-gray-100">
      <div className="container px-4 space-y-12 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={String(post?.image)}
                alt={String(post?.title)}
                fill
                className="object-cover"
              />
            </figure>
            <header className="p-4 pb-0 mt-8 md:mt-12 md:p-6 lg:p-12 ">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl">
                {post?.title}
              </h1>
              <Avatar.AvatarContainer border="without">
                <Avatar.AvatarImage
                  image={String(post?.author?.avatar)}
                  size="md"
                />
                <Avatar.AvatarContent>
                  <Avatar.AvatarTitle title={String(post?.author?.name)} />
                  <Avatar.AvatarSubTitle
                    subTitle={`Publicado em ${new Date(
                      String(post?.date)
                    ).toLocaleDateString("pt-BR")}`}
                  />
                </Avatar.AvatarContent>
              </Avatar.AvatarContainer>
            </header>
            <div className="px-4 prose prove-invert max-w-none md:px-6 lg:px-12">
              <MarkDown content={String(post?.body.raw)} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-transparent rounded-lg ">
              <h2 className="hidden mb-4 text-gray-100 text-heading-xs md:block">
                Compartilhar
              </h2>
              <div className="flex flex-row gap-2 md:flex-col">
                {shareButtons.map((item) => (
                  <Button
                    key={item.provider}
                    className="justify-start w-full gap-2"
                    variant="outline"
                    onClick={() => item.action()}
                  >
                    {item.icon}
                    <span className="hidden text-gray-100 group-hover:text-blue-200 md:block">
                      {item.provider}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

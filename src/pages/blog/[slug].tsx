import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Avatar } from "@/components/Avatar";
import { MarkDown } from "@/components/MarkDown";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find((item) => item.slug === slug);
  console.log(post);
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

        <div className="grid grid-cols-1 md:grid-cols-[1fr-300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={String(post?.image)}
                alt={String(post?.title)}
                fill
                className="object-cover"
              />
            </figure>
            <header className="p-4 pb-0 md:p-6 lg:p-12">
              <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl">
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
        </div>
      </div>
    </main>
  );
}

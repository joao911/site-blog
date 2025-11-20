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

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find((item) => item.slug === slug);
  console.log(post);
  return (
    <main className="mt-32 text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-[1fr-300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={String(post?.image)}
              alt={String(post?.title)}
              fill
              className="object-cover"
            />
          </figure>
          <Avatar.AvatarContainer
            avatar={
              <Avatar.AvatarImage
                image={String(post?.author?.avatar)}
                size="md"
              />
            }
          >
            <Avatar.AvatarTitle title={String(post?.author?.name)} />
            <Avatar.AvatarSubTitle subTitle={String(post?.author?.name)} />
          </Avatar.AvatarContainer>
        </article>
      </div>
    </main>
  );
}

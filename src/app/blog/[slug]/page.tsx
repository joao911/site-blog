import { BlogPostPage } from "@/templates/Blog/PostPage";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type postPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function PostPage({ params }: postPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }
  return <BlogPostPage post={post} />;
}

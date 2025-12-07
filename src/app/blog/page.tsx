import { Blog } from "@/templates/Blog";
import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  const sortedPost = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return <Blog posts={sortedPost} />;
}

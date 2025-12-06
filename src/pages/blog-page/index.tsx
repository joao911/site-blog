import { Blog, type BlogProps } from "@/templates/Blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: BlogProps) {
  return <Blog posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort((a, b) => new Date(a.date).getTime());
  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps;

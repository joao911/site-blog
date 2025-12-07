import { Blog } from "@/templates/Blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage() {
  return <Blog />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps;

import { useRouter } from "next/router";

import { Search } from "@/components/Search";
import { PostCard } from "./components/PostCard";
export const Blog = () => {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados para "${query}"`
    : "Dicas e estrategias pra impulsionar seu negócio";
  return (
    <div className="flex flex-col flex-grow h-full py-24">
      <header>
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
      <PostCard />
    </div>
  );
};

import React, { ChangeEvent, FormEvent, useCallback } from "react";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

// import { Container } from './styles';

export const Search: React.FC = () => {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";

  const handleSearch = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    router.push(`blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const handleClearQuery = () => {
    router.push("/blog", undefined, { shallow: true, scroll: false });
  };
  return (
    <form className="relative w-full group md:w-60" onSubmit={handleSearch}>
      <SearchIcon
        className={cn(
          "absolute w-4 h-4 text-gray-300 transition-colors translate-y-1/2 group-focus-within:text-blue-300 left-3 top-1",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Buscar"
        className="w-full h-10 text-gray-100 transition-all duration-200 bg-transparent border border-gray-400 rounded-md outline-none md:w-60 pl-9 text-body-sm focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
      <CircleX
        onClick={handleClearQuery}
        className={cn(
          "absolute w-4 h-4 text-gray-300 transition-colors translate-y-1/2 group-focus-within:text-blue-300 right-3 top-1 cursor-pointer",
          !query && "hidden"
        )}
      />
    </form>
  );
};

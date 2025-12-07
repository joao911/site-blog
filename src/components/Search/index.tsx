"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { CircleX, SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const hanQuery = !!searchParams?.has("q");

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
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`);
  };

  const handleClearQuery = () => {
    router.push("/blog");
  };
  useEffect(() => {
    if (hanQuery) {
      inputRef?.current?.focus();
    }
  }, [hanQuery]);

  return (
    <form className="relative w-full group md:w-60" onSubmit={handleSearch}>
      <SearchIcon
        className={cn(
          "absolute w-4 h-4 text-gray-300 transition-colors translate-y-1/2 group-focus-within:text-blue-300 left-3 top-1",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        ref={inputRef}
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

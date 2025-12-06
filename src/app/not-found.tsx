import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md text-center">
        <FileQuestion className="mx-auto mb-6 text-gray-100" size={64} />
      </div>
      <div className="relative inline-block mb-3 font-sans">
        <span className="inline-block font-bold text-white transform -translate-x-1 -translate-y-2 text-8xl -rotate-12">
          4
        </span>
        <span className="inline-block font-bold text-white text-8xl">0</span>
        <span className="inline-block font-bold text-white text-8xl">4</span>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="secondary" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar post
          </Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="relative inline-block mb-6">
          <AlertTriangle size={64} className="mx-auto text-gray-100" />
          <div className="absolute w-16 h-1 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 -rotate-12 top-1/2 left-1/2 opacity-80"></div>
        </div>
        <h2 className="mb-2 font-sans text-white text-heading-xl">
          Something went wrong!
        </h2>
        {error?.message && (
          <p className="px-4 mb-2 overflow-hidden text-gray-200 text-body-md text-ellipsis max-h-24">
            {error?.message}
          </p>
        )}

        <Button variant="secondary" onClick={reset} className="mt-4">
          Try again
        </Button>
      </div>
    </div>
  );
}

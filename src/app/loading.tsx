import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[25rem] flex flex-col items-center justify-center px-4">
      <div className="relative">
        <Loader2 size={62} className="text-gray-100 animate-spin" />
      </div>
      <div className="absolute top-0 left-0 w-full rounded-full border-t-2 border-cyan-100 animate-[spin-3s-linear-infinite]" />
    </div>
  );
}

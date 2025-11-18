import Image from "next/image";
import Link from "next/link";

export const PostCard = () => {
  return (
    <Link href="/blog/">
      <div>
        <div className="relative">
          <div className="absolute">
            <span className="text-gray-300 text-body-xs"> 04/01/1991</span>
          </div>
          <Image src="" alt="image" width={248} height={144} />
        </div>
      </div>
    </Link>
  );
};

import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/Avatar";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: Author;
};
export const PostCard = ({
  author,
  date,
  description,
  image,
  slug,
  title,
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      <div className="p-2 overflow-hidden rounded-md">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-gray-300 text-body-xs"> {date}</span>
          </div>
          <Image
            src={image}
            alt="image"
            width={289}
            height={144}
            className="object-cover object-center w-full h-40 rounded-xl"
          />
        </div>
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-gray-100 text-heading-sm line-clamp-3">
            {title}
          </h2>
          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>
        </div>

        <Avatar.AvatarContainer
          avatar={<Avatar.AvatarImage image={String(author?.avatar)} />}
        >
          <Avatar.AvatarTitle title={String(author?.name)} />
        </Avatar.AvatarContainer>
      </div>
    </Link>
  );
};

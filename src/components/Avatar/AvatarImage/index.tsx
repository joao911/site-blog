import Image from "next/image";
import { tv, VariantProps } from "tailwind-variants";

const avatarImage = tv({
  base: "relative overflow-hidden rounded-full border-blue-200 border-[1px]",
  variants: {
    size: {
      sm: "h-5 w-5 md:h-6 md:w-6",
      md: "h-8 w-8 md:h-9 md:w-9",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface AvatarImageProps extends VariantProps<typeof avatarImage> {
  image: string;
}

export const AvatarImage = ({ image, size }: AvatarImageProps) => {
  return (
    <div className={avatarImage({ size })}>
      <Image src={image} alt="avatar" fill className="object-cover" />
    </div>
  );
};

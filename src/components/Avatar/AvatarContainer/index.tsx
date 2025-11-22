import { tv, VariantProps } from "tailwind-variants";

const avatarContainer = tv({
  base: "flex items-center gap-3 border-t-[1px] border-gray-400 py-4",
  variants: {
    border: {
      top: "border-t-[1px] border-gray-400",
      without: "border-t-0",
    },
  },
  defaultVariants: {
    border: "top",
  },
});

interface AvatarContainerProps extends VariantProps<typeof avatarContainer> {
  children: React.ReactNode;
}

export const AvatarContainer = ({ children, border }: AvatarContainerProps) => {
  return <div className={avatarContainer({ border })}>{children}</div>;
};

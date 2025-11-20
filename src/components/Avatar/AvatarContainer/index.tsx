interface AvatarContainerProps {
  avatar: React.ReactNode;
  children: React.ReactNode;
}

export const AvatarContainer = ({ avatar, children }: AvatarContainerProps) => {
  return (
    <div className="flex items-center gap-3 border-t-[1px] border-gray-400 py-4">
      {avatar}
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

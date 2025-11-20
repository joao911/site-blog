interface AvatarContainerProps {
  children: React.ReactNode;
}

export const AvatarContainer = ({ children }: AvatarContainerProps) => {
  return (
    <div className="flex items-center gap-3 border-t-[1px] border-gray-400 py-4">
      {children}
    </div>
  );
};

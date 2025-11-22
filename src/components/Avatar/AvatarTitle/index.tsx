interface AvatarTitleProps {
  title: string;
}
export const AvatarTitle = ({ title }: AvatarTitleProps) => {
  return <span className="text-gray-200 text-body-sm">{title}</span>;
};

interface AvatarSubTitleProps {
  subTitle: string;
}
export const AvatarSubTitle = ({ subTitle }: AvatarSubTitleProps) => {
  return <span className="text-gray-300 text-body-xs">{subTitle}</span>;
};

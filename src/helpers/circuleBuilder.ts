interface CirculeBuilderProps {
  size: number;
  strokeWidth: number;
}
export const circuleBuilder = ({size, strokeWidth}: CirculeBuilderProps) => {
  return {center: size / 2, radius: (size - strokeWidth) / 2};
};

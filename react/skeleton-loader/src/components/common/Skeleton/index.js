import "./style.css";

const Skeleton = ({
  height,
  width,
  variant = "circular" | "rectangular" | "rounded",
  margin,
  className,
}) => {
  const SkeletonStyles = {
    width: width ?? "60px",
    height: height ?? "60px",
    margin: margin ?? "0",
    variant: variant ?? "rounded",
  };

  return (
    <div
      style={SkeletonStyles}
      className={`skeleton skeleton-${variant} ${className ?? ""}`}
    />
  );
};

export default Skeleton;

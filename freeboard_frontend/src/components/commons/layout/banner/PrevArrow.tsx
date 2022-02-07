interface NextArrowProps {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function NextArrow({
  className,
  style,
  onClick,
}: NextArrowProps) {
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "100px",
        cursor: "pointer",
        width: "10%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

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
        paddingTop: "0.7rem",
        paddingLeft: "2rem",
        width: "10%",
        height: "20%",
      }}
      onClick={onClick}
    />
  );
}

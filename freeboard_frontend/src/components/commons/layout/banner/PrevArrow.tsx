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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5.5px",
        paddingLeft: "1px",
        width: "5%",
        height: "10%",
      }}
      onClick={onClick}
    />
  );
}

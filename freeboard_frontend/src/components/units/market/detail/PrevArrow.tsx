import { RiArrowDropLeftLine } from "react-icons/ri";

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
      style={{
        color: "black",
        background: "none",
        borderRadius: "20px",
        cursor: "pointer",
        width: "10%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <RiArrowDropLeftLine style={{ color: "black", fontSize: "70px" }} />
    </div>
  );
}

import ReactPlayer from "react-player";

export default function LibraryRatePage() {
  // const [value, setValue] = useState(3);

  // const handleChange = (value) => {
  //   setValue(value);
  // };
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={800}
      height={600}
      loop={true}
      playing={true}
      volume={0}
    />
  );
}

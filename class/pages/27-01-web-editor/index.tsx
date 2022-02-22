import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function index() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  if (process.browser) {
    console.log("나는 브라우저다");
  } else {
    console.log("나는 서버다.");
  }
  return (
    <div>
      작성자 <input type="text" />
      비밀번호 <input type="text" />
      제목 <input type="text" />
      내용 <ReactQuill onChange={handleChange} />
    </div>
  );
}

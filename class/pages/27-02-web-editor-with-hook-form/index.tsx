import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function index() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<h2><br></h2>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  if (process.browser) {
    console.log("나는 브라우저다");
  } else {
    console.log("나는 서버다.");
  }
  return (
    <div>
      작성자 <input type="text" {...register("writer")} />
      <br />
      비밀번호 <input type="password" {...register("password")} />
      <br />
      제목 <input type="text" {...register("title")} />
      <br />
      내용 <ReactQuill onChange={handleChange} />
      <button>등록</button>
    </div>
  );
}

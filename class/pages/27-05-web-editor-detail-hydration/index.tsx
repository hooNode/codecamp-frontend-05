import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IFormValuese {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function index() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

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

  // if (process.browser) {
  //   console.log("나는 브라우저다");
  // } else {
  //   console.log("나는 서버다.");
  // }

  const onClickSubmit = async (data: IFormValuese) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(
        `/27-05-web-editor-detail-hydration/${result.data?.createBoard._id}`
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 <input type="text" {...register("writer")} />
        <br />
        비밀번호 <input type="password" {...register("password")} />
        <br />
        제목 <input type="text" {...register("title")} />
        <br />
        내용 <ReactQuill onChange={handleChange} />
        <button>등록</button>
      </form>
    </div>
  );
}

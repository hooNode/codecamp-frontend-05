// import styled from "@emotion/styled";
import { Modal } from "antd";

export default function ModalAlertPage() {
  const successModal = () => {
    Modal.success({ content: "게시글 등록에 성공했습니다." });
  };
  const failureModal = () => {
    Modal.error({ content: "비밀번호가 틀렸습니다." });
  };
  return (
    <>
      <button onClick={successModal}>
        알림창 내타내기!!(성공했을 때 메시지)
      </button>
      <br />
      <br />
      <button onClick={failureModal}>
        알림창 내타내기!!(실패했을 때 메시지)
      </button>
    </>
  );
}

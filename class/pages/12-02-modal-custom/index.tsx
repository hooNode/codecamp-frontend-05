import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPage() {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [password, setPassword] = useState();

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal1Visible(true)}>
        모달열기
      </Button>
      <Modal
        title="게시글 등록"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        <p>게시글이 등록되었습니다.</p>
        비밀번호 입력 : <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}

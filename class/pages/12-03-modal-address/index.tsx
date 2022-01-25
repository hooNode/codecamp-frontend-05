import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [add, setAdd] = useState("");

  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    // console.log(data.address);
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsFinish(true);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAdd(fullAddress);
  };

  const asdf = () => {
    setModal1Visible(true);
    setIsFinish(false);
  };
  const asdf22 = () => {
    setModal1Visible(false);
    setIsFinish(false);
  };

  return (
    <>
      <Button type="primary" onClick={asdf}>
        우편번호 검색
      </Button>
      <Modal
        title="우편 번호"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={asdf22}
        onCancel={asdf22}
      >
        {isFinish ? (
          "검색을 완료했습니다."
        ) : (
          <DaumPostcode onComplete={handleComplete} />
        )}
      </Modal>
      {add}
    </>
  );
}

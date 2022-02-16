import React from "react";
import styled from "@emotion/styled";

interface myBtnStyle {
  isValid?: boolean;
}

const BtnStyle = styled.button`
  background: ${({ isValid }: myBtnStyle) => (isValid ? "red" : "blue")};
`;
export default function Button01({ isValid, type, text }) {
  return (
    <BtnStyle type={type} isValid={isValid}>
      {text}
    </BtnStyle>
  );
}

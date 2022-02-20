import React from "react";
import useAuth from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();
  if (isLoading) return <>로디이이이이잉.....</>;
  return (
    <div>
      <div>커스텀 훅 연습 페이지</div>
    </div>
  );
}

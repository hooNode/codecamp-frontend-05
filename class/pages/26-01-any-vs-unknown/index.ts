// 1. any type return

export const getAny = (args: any) => {
  const answer = args + 2;
  return answer;
};
const myResult1 = getAny("철수");

// 2. known type return
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else {
    return "숫자를 넣어주세요";
  }
};

const myResult2 = getUnknown("철수");

import { add } from "../../pages/34-01-jest/index";

it("내가하고 싶은 작은 테스트 - 1", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

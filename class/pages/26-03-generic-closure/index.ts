// 클로저 기초

export function firstFunc(arg1: string) {
  return function secondFunc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const resultFunction1 = firstFunc("영희")(10);
console.log(resultFunction1);

// 클로저 - any

export function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const resultFunction2 = firstFunc2("영희")(10);
console.log(resultFunction2);

//
//
// 클로저 - generic

export function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const resultFunction3 = firstFunc3(20)(10);
console.log(resultFunction3);

//
//
// 클로저 - generic - 화살표 함수
// prettier-ignore
export const firstFunction4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
};

const resultFunction4 = firstFunction4(20)(10);
console.log(resultFunction4);

//
//
// 클로저 - generic - 화살표 함수
// prettier-ignore
export const firstFunction5 = <T>(Component: T) => <P>(props: P) => {
    return [Component, props];
};

const resultFunction5 = firstFunction5("bbb")({ aaa: "철수" });
console.log(resultFunction5);

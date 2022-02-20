// 1. 문자
export function getString(args: string): number {
  return 123;
}

console.log(getString);

export function getAny(arg1: any, arg2: any, arg3: any): any {
  return [arg3, arg2, arg1];
}

const result5 = getAny("철수", "다람쥐초등학교", 8);
console.log(result5);

// prettier-ignore
export function getGenericReverse<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenericReverse("철수", "다람쥐초등학교", 8);
console.log(result6);

// prettier-ignore
export function getGenericReverseT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenericReverseT("철수", "다람쥐초등학교", 8);
console.log(result7);

// prettier-ignore
export function getGenericReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result8 = getGenericReverseT("철수", "다람쥐초등학교", 8);
console.log(result8);

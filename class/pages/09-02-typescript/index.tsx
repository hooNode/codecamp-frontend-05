export default function TypescriptPage() {
    // 타입추론
    // let aaa = "안녕하세요"
    // aaa = 3

    // let bbb: string;
    // bbb = 1 + ""

    // let ddd: boolean
    // ddd = false

    //배열타입
    // let zzz: string|(number[])[]; = 'asdf', [[123], [123]]
    let xxx: string[]|number[]= [1,2,3,4,5]
    xxx =['훈이','철수','양희']
    
    //객체
    interface IProfile {
        name: string,
        age: number|string,
        school: string
    }
    // const profile :IProfile = {
    const profile = {
        name : "철수",
        age : 12,
        school : "다람쥐 초등학교"
    }
    // profile.aaa = "asd"
    
    return <div>타입스크립트 연습!!</div>
}

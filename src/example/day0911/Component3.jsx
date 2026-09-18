import youImg from "./you.jpg";

function plus(x,y){} // x,y -> 매개변수
plus(3,4) // 3,4 -> 인자값

// [프롭스] : 상위컴포넌트에서 하위로 전달하는 객체
function plus2(props){} // props -> 매개변수
plus2({v1:3, v2:4})

// 상위 요소
export default function Component3(props){
    // js 문법
    let name = "유재석";
    // return 부터 jsx 문법
    // {} : jsx 구역 내 중괄호 내에 js 문법 사용 가능
    return(<>
            <div>{name}</div>
            <div>{1+2}</div>
            <input type = "text" value="안녕" name="입력상자"/>
            <SubComp1 name = "유재석" age="40"></SubComp1>
            <SubComp1 name = "권유린" age="80" src = {youImg}></SubComp1>
        </>)
}


// 하위 요소
function SubComp1 (props){
    console.log (props);
    return(<>
        <h1>{props.name}님</h1>
        <h1>{props.age}세</h1>
        <img src={props.src}/>
    </>)
}
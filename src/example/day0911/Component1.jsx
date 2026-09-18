/*
    1. 나만의 마크업 만들기
        : export default function 컴포넌트명( props ){}
        *컴포넌트명은 대문자로 시작해야한다.
    2. return 에서 두줄이상 입력시 (<> <>)에 담는다.
    3. 내부에서 사용하는 component는 export default 생략
*/

function Header(props){
    return <div>헤더</div>
}

export default function Component1( props ){
    // 내가 만든 마크업 넣을 수 있다.
    return (<>
        <Header></Header>
        <div>본문</div>
        <Footer></Footer>
    </>)
}

function Footer(props){
    return <div>푸터</div>
}
// 1. 선언적 함수 ( 기본 )로 컴포넌트 생성
function FromComp(props){
    return(<>
        <li>프론트엔드</li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
        </ul>
    </>)
}
// 2. 화살표 함수
const BackComp = ( props ) =>{
        return (<>
            <li>백엔드</li>
            <ul>
                <li>Java</li>
                <li>Oracle</li>
                <li>등</li>
            </ul>
        </>)
}


// 3. 익명함수
const FormComp = function(props){
        return(<>
            <form>
                <select name = "gubun">
                    <option value = "front">프론트</option>
                    <option value = "back">백</option>
                </select>
                <input type="text" name = "title"/>
                <input type="submit" value = "추가"/>
            </form>
        </>);
}
    
// *세가지의 컴포넌트를 합치는 컴포넌트
export default function Component2(props){
        return(<>
            <div>
                <h2>제목</h2>
                <ol>
                    <FromComp></FromComp>
                    <BackComp></BackComp>
                </ol>
                <FormComp></FormComp>
            </div>
        </>)
}

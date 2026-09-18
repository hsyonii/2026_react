function Front(props){
    return(<>
        <div>
            <li><a href = "/" onClick={()=>{
                props.event1();
            }}>프론트</a></li>
        </div>
        <ul>
            <li>프1</li>
            <li>프2</li>
            <li>프3</li>
        </ul>
    </>)
}

const Back=({event2})=>{
    return(<>
        <li><a href = "/" onClick ={(event)=>{
            event.preventDefault();
            event2('백엔드 클릭됨')
        }}
        백엔드/></li>
        <ul>
            <li>백1</li>
            <li>백2</li>
            <li>백3</li>
        </ul>
    </>)
}

export default function Component6(props){
    return(<>
        <p>제목</p>
        <ol>
            <Front event1={()=>{alert('프론트 클릭됨')}}></Front>
            <Back event2={(msg)=> {
                alert(msg);
            }}></Back>
        </ol>
    </>)
}
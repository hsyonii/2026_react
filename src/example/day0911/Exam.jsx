export default function Exam(){
    return(<>
        <Event1 onClick={()=>{alert('이벤트1 클릭')}}></Event1>
        <Event2></Event2>
    </>)
}

function Event1(props){
    return(<>
        <a href='/' onClick={()=>props.onClick()}>이벤트1</a>
    </>)
}

function Event2(){
    return(<>
        <button>이벤트2</button>
    </>)
}
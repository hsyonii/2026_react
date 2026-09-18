export default function Component5(props){
    function button1(){
        alert('버튼1');
    }
    const button2 = function(){alert('버튼2')}
    const button3 = () =>{alert ('버튼3')}
    return(<>
        <button onClick = {button1}>버튼1</button>
        <button>버튼2</button>
        <button onClick = {button3}>버튼3</button>
        <button onClick={()=> {alert('버튼4')}}>버튼4</button>
    </>)
}
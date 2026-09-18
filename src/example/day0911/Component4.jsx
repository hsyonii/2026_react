function FrontComp(props){
    const list=[];
    for(let i=0; i<=props.frontData[i].length-1; i++){
        list.push(
            <li key={i}>{props.frontData[i]}</li>
            //<li>항목별로 key값을 지정해줘야 함.
        );

    }
    return (<>
        <li> {props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}

const BackComp = ({propData2, baTitle})=>{
    const liRows = [];
    let keyCnt = 0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        )
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
export default function Component4(props){
    const frontData = ['프론트1','프론트2','프론트3','프론ㅌ4','프론트5']
    const backData = ['백1','백2','백3','백4','백5']
    return(<>
        <div>
            <h2>
                실습실습
            </h2>
            <ol>
                <FrontComp frontData = {frontData} frTitle = "프론트"></FrontComp>
                <BackComp backData = {backData} baTitle="백"></BackComp>
            </ol>
        </div>
    </>)
    // * {propData1 : frontData, frTitle : "프론트"}
    //   {propData2 : backData, baTitle : "백"} 과 같은 하나의 객체형태로 자식component에게 전달.
}
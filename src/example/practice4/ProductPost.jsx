import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function ProductPost (props){
    // 받아올(저장할) 데이터
    // useState() 반환 -> 단 2개요소 가진 배열 반환 [ 데이터객체, setter ]
    const[proObject,setProObject] = useState({
        // 초기상태 객체 내부 정의, 숫자형 데이터도 받을 때는 문자열.
        proName:"",
        proPrice:"",
        catNo:""
    });

    // 동작함수(핸들러)
    // 메인 컴포넌트: function 함수(){} , 동작함수: const 함수 = () => {} (화살표함수) 로 작성.
    const saveProduct = () => {
        // axios통해 입력받은 값 백엔드로 보낸다.
        axios.post("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products",{
            name: proObject.proName,
            price: Number(proObject.proPrice),
            cno: Number(proObject.catNo)
        })
        // axios 요청후 반환값 받기 -> axios가 성공적으로 실행됐을 때만 자동으로 .then문 실행
        // .then((reponse)=>{ 응답받은후 동작 })
        .then((reponse)=>{
            alert("제품등록 성공!")
            // 등록 후 입력창 초기화
            setProObject({
            proName: "",
            proPrice: "",
            catNo: ""
        })
    });
    }
    return(<>
        <div id = "mainTitle">제품등록</div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>학과</td>
                        <td>방송연애학과</td>
                    </tr>
                    <tr>
                        <td>자기소개</td>
                        <td>자기소개</td>
                    </tr>
                    <tr>
                        <td>제품 등록 폼</td>
                        <td>
                            <input name="proName"
                            type="text"
                            placeholder= "제품명"
                            value={proObject.proName}
                            onChange={handleChange}/><br/>
                            <input name="proPrice"
                            type="number"
                            placeholder="가격" 
                            value={proObject.proPrice} 
                            onChange={handleChange}/><br/>
                            <input name="catNo" 
                            type="number" 
                            placeholder="카테고리번호" 
                            value={proObject.catNo} 
                            onChange={handleChange}/><br/>
                            <button onClick={saveProduct}>등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}
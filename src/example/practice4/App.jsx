import { Link, Routes, Route } from "react-router-dom";
import CategoryPost from "./CategoryPost";
import ProductGet from "./ProductGet";
import ProductPost from "./ProductPost";
import AnYang from "./AnYang";
import "./App.css";

export default function App (props){
    return(<>
        <div id = "sidebar">
            <div id = "title">ㅇㅇㅇ팀 프로젝트</div>
            <div id = "menuTitle">
                팀원소개
                <ul id = "menu">
                    <li><Link to="/categoryPost">카테고리등록</Link></li>
                    <li><Link to="/productGet">제품조회</Link></li>
                    <li><Link to="/productPost">제품등록</Link></li>
                    <li><Link to="/view">안양시 생필품 가격 동향</Link></li>
                </ul>
            </div>
        </div>
        <div id ="main">
            <Routes>
                <Route path="/categoryPost" element={<CategoryPost/>}/>
                <Route path="/productPost" element={<ProductPost/>}/>
                <Route path="/productGet" element={<ProductGet/>}/>
                <Route path="/view" element={<AnYang/>}/>
            </Routes>
        </div>
    </>)
}
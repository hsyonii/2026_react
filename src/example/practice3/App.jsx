import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Soyeon from "./Soyeon";
import Jeongwoo from "./Jeongwoo";
import Seungyeon from "./Seungyeon";

export default function App ( props ){
    return(<>
    <div id="sidebar">
        <h3 id="title">황소연 짱이조</h3>
        <ul>
            <li><Link to="/soyeon">황소연</Link></li>
            <li><Link to="/jeongwoo">최정우</Link></li>
            <li><Link to="/seungyeon">김승연</Link></li>
        </ul>
    </div>
    <div id="main">
    <Routes>
        <Route path="/soyeon" element={<Soyeon/>}></Route>
        <Route path="/jeongwoo" element={<Jeongwoo/>}></Route>
        <Route path="/seungyeon" element={<Seungyeon/>}></Route>
    </Routes>
    </div>
    </>)
    
}

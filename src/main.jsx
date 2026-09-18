//[필수] 1. 리액트 라이브러리 최초 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";
//[필수] 2. index.html 에서 root 마크업 가져오기 , #ID , .Class
const root = document.querySelector( '#root' )
//[필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );

// import Exam from "./example/practice1/practice1.jsx"

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// create.render(<practice1/>)

// [day0916]
import { BrowserRouter } from "react-router-dom";
import App from "./example/practice4/App";
create.render( <BrowserRouter><App/></BrowserRouter>)
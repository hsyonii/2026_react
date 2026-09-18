import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

export default function AnYang(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/view')
            .then((re) => {
                setData(re.data);
            });
    }, []);

    // 데이터가 로드되기 전 예외 방지
    if (!data || !data.data) return null;

    const list = data.data;

    return (
        <div>
            <h3 className='mainTitle'>안양 생필품 가격동향</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>품목</th>
                        <th>규격</th>
                        <th>당월평균(원)</th>
                        <th>전월평균(원)</th>
                        <th>증감률(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item["품목"]}</td>
                            <td>{item["규격"]}</td>
                            <td>{item["당월평균"]}</td>
                            <td>{item["전월평균"]}</td>
                            <td>{item["증감"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

import { useState } from "react";

export default function ArticleEdit(props) {
    const [title, setTitle] = useState(props.selectRow.title);
    const [writer, setWriter] = useState(props.selectRow.writer);
    const [contents, setContents] = useState(props.selectRow.contents);

    return (
        <article>
            <form onSubmit={(event) => {
                event.preventDefault();
                // event.target 대신 State 값(title, writer, contents)을 직접 전달합니다.
                props.editAction(title, writer, contents);
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>
                                <input
                                    type="text"
                                    name="writer"
                                    value={writer}
                                    onChange={(event) => setWriter(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea
                                    name="contents"
                                    cols="22"
                                    rows="3" /* row -> rows 수정 */
                                    value={contents}
                                    onChange={(event) => setContents(event.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* input 태그는 단독 태그입니다. */}
                <input type="submit" value="수정하기" />
            </form>
        </article>
    );
}
// 함수형 컴포넌트 

import { useState } from "react";

const EventChangeFuncComp = () => {
    const [message, setMessage] = useState("안녕");

    // onchange 함수로 바꿔서 사용하기

    return (
        <div>
            {/** h1태그에 input으로 작성한 내용 출력하기 */}
            <h1>글을 입력하세요</h1>
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value);
                    setMessage(e.target.value);
                }
            } />
            <p>{message}</p>
        </div>
    )
}

export default EventChangeFuncComp;
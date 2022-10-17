// 클래스형 컴포넌트

import { Component } from "react";

class EventChangeComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "hi"
        }
    }
    // onchange 메소드를 만들어서 확인해보기.
    
    render() {
        return(
            <div>
            {/** h1태그에 input으로 작성한 내용 출력하기 */}
            <h1>글을 입력하세요</h1>
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value);
                    this.setState({ message : e.target.value });
                }
            } />
            <p>{this.state.message}</p>
        </div>
        )
    }
}

export default EventChangeComp;
// 클래스형 컴포넌트

import { Component } from "react";

class EventChangeComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "hi"
        }
    }
    render() {
        return(
            <div>
            {/** h1태그에 input으로 작성한 내용 출력하기 */}
            <h1>{this.state.message}</h1>
            <input type="text" onChange={
                (e)=> {
                    console.log(e.target.value);
                    this.setState({ message : e.target.value });
                }
            } />
        </div>
        )
    }
}

export default EventChangeComp;
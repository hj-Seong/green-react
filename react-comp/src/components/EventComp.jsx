import { Component } from "react";

// 클래스형 컴포넌트 이벤트
class EventComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn:true
        }
    }
    render() {
        const {isToggleOn} = this.state;
        return (
            <button onClick={
                ()=> this.setState({isToggleOn :!isToggleOn})
            }> { isToggleOn ? 'ON' : 'OFF' } </button>
        )
    }
}
export default EventComp;
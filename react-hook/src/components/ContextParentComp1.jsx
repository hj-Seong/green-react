// 부모 컴포넌트가 되어서 context를 통해서 value 전달
// value값에 state와 dispatch를 전달 (객체형태) - useReducer 사용
import { useReducer } from "react";
import { CountContext } from "./ContextComp2";
import ContextChildrenComp3 from "./ContextChildrenComp3";

function reducer (state, action) {
    switch (action.type) {
        case "increment":
            return {count : state.count+1};
        case "decrement" :
            return {count : state.count-1}
    }
}

const ContextParentComp1 = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});
    return ( 
        <div>
            <CountContext.Provider value={ {state:state, dispatch: dispatch} }>
                <ContextChildrenComp3 />
            </CountContext.Provider>

        </div>
    );
}

export default ContextParentComp1;
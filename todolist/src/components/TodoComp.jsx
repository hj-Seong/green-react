import { useReducer } from "react";

const initstate = {
    // todoitem의 형태 확인 : 1개의 todo값을 가지고 있음
    todoitem : {
        done : true,
        todo : "확인",
        id : 1
    },
    // 배열을 통해서 여러개의 todoitem 사용
    todolist : [], // todoitem을 넣을 공간
    // todo값을 입력받을 todoInput
    todoInput : ""
}

function reducer(state, action) {
    switch (action.type) {
        case "checked" :
            return {...state, 
                todoitem : {
                    ...state.todoitem,
                    done: !state.todoitem.done
                }
            }
        case "todoInput":
            return { ...state , todoInput : action.payload}
    }

}
const TodoComp = () => {
    const [state, dispatch] = useReducer(reducer, initstate)
    return (  
        <div>
            <input type="text" onChange={
                (e)=>{ dispatch({type: "todoInput", payload : e.target.value})}
                }/>
            <button>+</button>

            <ul>
                <li>
                    {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) */}
                    <input type="checkbox" 
                        checked={state.todoitem.done} 
                        onClick={()=>{dispatch({type: "checked"})}} />
                        {state.todoitem.todo}
                    <button>X</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoComp;
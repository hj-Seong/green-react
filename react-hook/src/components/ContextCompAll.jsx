// useContext를 사용 및 확인하기 위해 여러 개의 컴포넌트를 작성
// useContext의 데이터 관리 특성
//  : 리액트는 부모의 값을 props을 통해 계속해서 아래로 내려주는 형식으로 사용
// > useContext를 사용하면 중간에 props 전해주는 것 없이 자손컴포넌트에 값을 전해줄수있다

const ContextCompAll = () => {
    return ( 
        <div>
            <Toolbar />
        </div>
    );
}

// 다른 js에서 import해서 사용하기위함
export default ContextCompAll ;

// ContextCompAll에서 사용할 컴포넌트
// 현재 컨포넌트에서만 사용할수 있다

// 함수형 컴포넌트 툴바 > ContextCompAll을 부모로 삼고, 2개의 자식을 갖는 컴포넌트
const Toolbar = () => {
    return ( 
        <div>
            <ThemedButtonFunc />
        </div>
    );
}

// Toolbar 컴포넌트 안에 들어갈 컴포넌트
// 함수형 컴포넌트
const ThemedButtonFunc = () => {
    return ( 
        <div>
            <button style={ {backgroundColor: "yellow"} } > 직접 넣어준 컬러값입니다 </button>
        </div>
    );
}

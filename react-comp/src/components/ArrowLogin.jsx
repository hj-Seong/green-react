import { PropTypes } from "prop-types";

// 함수형 컴포넌트
const ArrowLogin = (props) => {
    const {login, name} = props
    console.log(typeof login)
    return (
        <div>
            {
                login ? (
                    <div>
                        <h1>로그인에 성공하였습니다</h1>
                        <p>{name}입니다</p>
                    </div>
                ) : (
                    <h1>로그인이 필요합니다</h1>
                )
            }
        </div>
    )
}

export default ArrowLogin;

//Props의 자료형 설정
ArrowLogin.propTypes = {
    login : PropTypes.bool,
}
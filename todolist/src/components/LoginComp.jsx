import { useState } from "react";

const LoginComp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      {/** 로그인이 false일때 로그인창, true 인사창 */}
      {login ? (<h1>{name}님 반갑습니다</h1>) : (
        <form onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
          }}
        >
          <input type="text" onChange={(e) => {setName(e.target.value);}}/>
          <input type="submit" value="로그인" />
        </form>
      )}
    </div>
  );
};

export default LoginComp;

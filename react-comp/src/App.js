import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp';
import HelloFuncComp from './components/HelloFuncComp';
import MyLogin from './components/MyLogin';
import ArrowLogin from './components/ArrowLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name="홍길동" adress="부산" num="1"> 반갑습니다 </HelloComp>
        <HelloFuncComp name="성춘향"  />
        <MyLogin login="true" name="홍길동"/>
        <ArrowLogin login={false} name="성춘향" />
      </header>
    </div>
  );
}

export default App;

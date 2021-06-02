import logo from './logo.svg';
import './App.css';
import {list} from './util/endpoints'
import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';


function App() {

  /*const[test,setTest] = useState("asd");
  useEffect(()=>{
    list().then((res)=>setTest(res));
  })
  return test;*/
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return <MainPage/>
}

export default App;

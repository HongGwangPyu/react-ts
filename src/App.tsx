import React ,{useState}from 'react';
import './App.css';
import Greetings from "./Greetings";

const App: React.FC = () => {
  const [count, setCount]= useState<number>(0);
  return (
      <div className="App">
        <header className="App-header">
          <Greetings name="Hi" count={count} onClick={()=> setCount(count + 1)}/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
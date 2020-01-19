import React ,{useState}from 'react';
import './App.css';
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import Counter2 from "./Counter2";
import Counter from "./Counter";
import ReducerSample from "./ReducerSample";
import MyForm2 from "./MyForm2";

const App: React.FC = () => {
  const [count, setCount]= useState<number>(0);
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
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
           <Counter/>
          <Counter2/>
            <MyForm onSubmit={onSubmit}/>
            <MyForm2 onSubmit={onSubmit}/>
          <ReducerSample/>
        </header>
      </div>
  );
}

export default App;
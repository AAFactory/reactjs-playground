import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import React, {useState, useEffect} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }
 
  return (
    <div>
      <h1>{number}</h1> 
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <Counter number={number} />
      <Counter number={number} />
      <Counter number={number} />
    </div>
  );
}

export default App;

import React from 'react';
import {useSelector} from 'react-redux'

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const state = useSelector(state => ({...state.counter}))
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onSetDiff(parseInt(e.target.value, 10));
  };
  
  return (
    <div>
      <h1>Counter.js</h1>
      <span>{`Current number is ${number} ← from props`}</span><br/>
      <span>{`Current number is ${state.number} ← from redux store`}</span>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
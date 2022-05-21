import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../modules/counter';

function Counter2() {
  
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  const number = useSelector(state => state.counter.number)
  const diff = useSelector(state => state.counter.diff)

  let checkNum = 0
  const checkNumRef = useRef(0)

  useEffect(() => {
    console.log(`useEffect: componet 추가됨`)
    return (() => {
      console.log(`useEffect: diff값 변경감지`)
      console.log(`useEffect: componet 삭제 후 추가예정`)
    })
  }, [diff])

  return (
    <div>
      { console.log('re-rendering') }
      {/* { console.log(`checkNum: ${++checkNum}`) } */}
      {/* { console.log(`checkNumRef: ${++checkNumRef.current}`) } */}
      <h1>Counter2.js</h1>
      <span>{ `Current number is ${number} ← from redux store` }</span>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter2;
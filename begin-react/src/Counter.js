import React, {useState, useEffect} from 'react';

function Counter({number}) {
  
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  return (
    <div>
      {number}
    </div>
  );
}

export default Counter;
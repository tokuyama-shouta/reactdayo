import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp=()=>{
    setCount(count + 1);
  }
  const onCountDown=()=>{
    setCount(count - 1);
  }
  return(
    <div>
      <p>Count:{count}</p>
      <button className='ui primary button' onClick={onCountUp}>Increment!</button>
      <button className='ui red button' onClick={onCountDown}>DEcrement!</button>
    </div>
    
  )
}

export default Counter
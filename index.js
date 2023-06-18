import React, {useState, useEffect} from 'react';
import reactDOM from 'react-dom';
import css from './style.css';

function Counter(){
  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter+1);
  }
  useEffect(()=>{
    alert('No. of count '+counter);
  })
  return(
    <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>
  );
}

const roots = <Counter />;
const el = document.getElementById('root');

reactDOM.render(roots, el);
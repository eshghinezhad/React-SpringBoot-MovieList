import React, { useState } from 'react'
import '../css/Calc.css';

export default function CalcButton() {
     const [result, setResult] = useState(0);
    
    const add = () => {

    }
    const subtract = () => {

    }
    const act = () => {
        result === 0 ? setResult(1) : setResult(result + 1);
    }
  return (

    <div>
            <h3>Calculator Result: {result}</h3>
            <button onClick={act} style={{ marginLeft: '10px' }}>1</button>
            <button onClick={act} style={{ marginLeft: '0' }}>2</button>
            <button onClick={act} style={{ marginLeft: '0' }}>3</button>
            <button onClick={act} style={{ marginLeft: '0' }}>4</button>
            <button onClick={add} style={{ marginLeft: '20px' }}>+</button>
            <button onClick={subtract} style={{ marginLeft: '20px' }}>-</button>
    </div>
  )
}

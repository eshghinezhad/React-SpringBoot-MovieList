import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState(0);

    const add = () => {
        
    };

    const subtract = () => {
        
    };

    return (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3>Calculator Result: {result}</h3>
            <label style={{ marginRight: '10px' }}>number1:</label>
            <input
                type="number"
                style={{ width: '50px', marginRight: '10px' }}
            />
            <label style={{ marginRight: '10px' }}>number2:</label>
            <input
                type="number"
                style={{ width: '50px', marginRight: '10px' }}
            />
            <div>
                 <button onClick={add} style={{ marginLeft: '20px' }}>+</button>
                 <button onClick={subtract} style={{ marginLeft: '20px' }}>-</button>
            </div>
            <hr />
        </div>
    );
}
export default Calculator

import React, { use, useEffect, useState } from 'react';

const API_URL = 'http://localhost:3001/counter/1';
const Counter = ()=> {
    const [count, setCount] = useState(0);

//LOAD THE INITIAL COUNTER FROM THE SERVER
    useEffect(() => {
        const fetchCounter = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error('Error fetching counter:', error);
            }
        };
        fetchCounter();
    }, []);


    const increment = () => {
        alert('You clicked increment! count will be: ' + (count + 1));
        setCount(count + 1);
    };

    const decrement = () => {
        alert(`You clicked decrement! count will be: ${count - 1}`);
        setCount(count - 1);
    };
    const reset = () => {
        alert('You clicked reset! count will be set to 0');
        setCount(0);
    };
    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    return (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset} style={{ marginLeft: '10px'}} >Reset</button>
            <hr />
        </div>
        
    );

}
export default Counter;

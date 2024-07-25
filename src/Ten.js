import React, {useEffect,useState } from 'react';

function Ten() {
    const [count, setCount] = useState(1);

    const btnIncrement = () => {
        setCount(count + 1);
    };

    const btnDecrement = () => {
        setCount(count - 1);
    };
    const btnAddToCart=()=>{
        setCount(1)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="btn btn-dark" onClick={btnDecrement}>-</button>
            <h1>{count}</h1>
            <button className="btn btn-dark" onClick={btnIncrement}>+</button>
        </div>
    );
}

export default Ten;
import React, { useState } from 'react';

function Zero() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log("Adding Review");
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter an item" 
                value={inputValue} 
                onChange={handleInputChange} 
                size="150"
                style={{ marginRight: '10px' }}
            />
            <h2>Reviewer Name </h2>
            <h4>This breed is very good</h4>
            <button 
                type="button" 
                className="btn btn-dark btn-sm" 
                onClick={handleAddItem}
                
            >
                Add
            </button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Zero;
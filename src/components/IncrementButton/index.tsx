"use client";
import React, { useState, useEffect} from 'react';

const IncrementButton = () => {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState();

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/buttonName');
            console.log(res);
            const data = await res.json();
            console.log(data);
            setButtonName(data.name);
        })();
    }, []);

    return (
        <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded shadow">
            <p>{buttonName}</p>
            {}
            <button className="bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-colors duration-200" onClick={handleDecrement}>
                -
            </button>
            <span className="font-bold text-xl">{count}</span>
            <button className="bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-colors duration-200" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default IncrementButton;

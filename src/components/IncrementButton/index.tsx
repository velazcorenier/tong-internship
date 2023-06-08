"use client";
import React, { useState, useEffect} from 'react';

const IncrementButton = () => {
    const [buttonName, setButtonName] = useState();
    const [buttonColor, setColor] = useState();
    

    const handleColorChange = () => {
        (async () => {
            const res = await fetch('/api/buttonName');
            console.log(res);
            const data = await res.json();
            console.log(data);
            setButtonName(data.name);
            setColor(data.color);
        })();
    };

    useEffect(() => {
        handleColorChange();
    }, []);

    return (
        <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded shadow">
            <div className="flex flex-col items-center">
                <div style={{ backgroundColor: buttonColor, width: '20px', height: '20px' }}></div>
            </div>
            {}
            <button className="bg-gray-200 text-black p-2 rounded hover:bg-gray-300 transition-colors duration-200" onClick={handleColorChange}>
                Change Color
            </button>
        </div>
    );
};

export default IncrementButton;

import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
    const COLOR_LIST = ['green', 'yellow', 'red', 'blue', 'black'];
    const randomIndex = Math.trunc(Math.random() * (COLOR_LIST.length - 1));
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    // Dung callback cho nay de initColor chay 1 lan
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color') || 'green';
        return initColor;
    });

    function hanleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={hanleBoxClick}
        >
        COLOR BOX
        </div>
    );
}

export default ColorBox;
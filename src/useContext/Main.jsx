import React from 'react';
import { ThemeContext } from './ThemeContext';
import './style.css';
const Main = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1>Main</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis
                ipsum quibusdam quam consequatur doloremque accusamus debitis aliquam explicabo
                earum, reprehenderit nam sint optio officiis soluta repudiandae. Doloremque, magnam
                nostrum.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis
                ipsum quibusdam quam consequatur doloremque accusamus debitis aliquam explicabo
                earum, reprehenderit nam sint optio officiis soluta repudiandae. Doloremque, magnam
                nostrum.
            </p>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};

export default Main;

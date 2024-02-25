import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
    const [message, setMessage] = useState("Hello, World!");
    const [isToggled, setIsToggled] = useState(false);

    const toggleMessage = () => {
        if (isToggled) {
            setMessage("Hello, World!");
        } else {
            setMessage("Welcome to Bar Exam Prep GPT!");
        }
        setIsToggled(!isToggled);
    };

    return (
        <div className={styles.App}>
            <h1 className={isToggled ? styles.coolText : ''}>{message}</h1>
            <button onClick={toggleMessage} className={styles.coolButton}>Click here!</button>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import styles from './App.module.css';
import OpenAIHelloWorld from './OpenAI/openAiHelloWorld'; // Import the OpenAIHelloWorld component

function App() {
  return (
    <div className={styles.App}>
      <OpenAIHelloWorld /> 
      <button className={styles.coolButton}>Generate New Message</button>
    </div>
  );
}

export default App;
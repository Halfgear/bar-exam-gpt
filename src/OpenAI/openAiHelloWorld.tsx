import React, { useState } from 'react';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '',
    timeout: 5000,
    dangerouslyAllowBrowser: true,
});

const OpenAIHelloWorld: React.FC = () => {
    const [generatedText, setGeneratedText] = useState<string>('');

    const generateHelloWorld = async () => {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "This is my hello world project for HCI class." }],
            model: "gpt-3.5-turbo",
        });

        // Access the 'content' property from the 'message' of the first choice.
        if (completion.choices[0].message && typeof completion.choices[0].message.content === 'string') {
            setGeneratedText(completion.choices[0].message.content);
        } else {
            console.error('Received unexpected response format from OpenAI.');
        }
    };

    return (
        <div>
            <button onClick={generateHelloWorld}>Generate Hello World</button>
            <p>{generatedText}</p>
        </div>
    );
};

export default OpenAIHelloWorld;

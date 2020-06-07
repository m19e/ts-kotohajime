import React, { useState } from "react";
import "./App.css";

type AppProps = { message: string };

const App: React.FC<{ message: string }> = ({ message }) => {
    return (
        <>
            <div>{message}</div>
            <Reverse />
        </>
    );
};

const Reverse: React.FC = (): JSX.Element => {
    const [text, setText] = useState("");

    return (
        <>
            <p>text: {text.split("").reverse().join("")}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
};

export default App;

import * as React from "react";
import "./App.css";

type AppProps = { message: string };

const App: React.FC<{ message: string }> = ({ message }) => {
    return (
        <>
            <div>{message}</div>
            <Reverse />
            <List />
        </>
    );
};

const Reverse: React.FC = (): JSX.Element => {
    const [text, setText] = React.useState<string>("");

    return (
        <>
            <p>text: {text.split("").reverse().join("")}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
};

export default App;

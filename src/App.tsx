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

interface IItem {
    id: number;
    name: string;
}

const List: React.FC = (): JSX.Element => {
    const [text, setText] = React.useState<string>("");
    const [items, setItems] = React.useState<IItem[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setItems([...items, { id: items.length + 1, name: text }]);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button>Add</button>
            {items.map((item: IItem) => (
                <p>{item.name}</p>
            ))}
        </form>
    );
};

export default App;

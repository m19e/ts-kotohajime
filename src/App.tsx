import * as React from "react";
import "./App.css";

// useState
type AppProps = { message: string };

const App: React.FC<{ message: string }> = ({ message }) => {
    return (
        <>
            <div>{message}</div>
            <Reverse />
            <List />
            <ThemeContext.Provider value={{ color: "skyblue" }}>
                <Toolbar />
            </ThemeContext.Provider>
            <Counter />
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

// useContext
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

// useContext
interface IContext {
    theme: string;
    color: string;
    font: string;
}

const ThemeContext = React.createContext<Partial<IContext>>({});

const ThemedButton: React.FC = ({ children }): JSX.Element => {
    const { color } = React.useContext(ThemeContext);
    return <button style={{ background: color }}>{children}</button>;
};

const Toolbar: React.FC = (): JSX.Element => {
    return <ThemedButton>buttonA</ThemedButton>;
};

// useReducer
interface IState {
    count: number;
}

interface IAction {
    type: "increment" | "decrement";
}

const initialState: IState = { count: 0 };

function reducer(state: IState, action: IAction) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const Counter: React.FC = (): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
};

export default App;

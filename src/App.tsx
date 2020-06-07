import React from "react";
import "./App.css";

type AppProps = { message: string };

const App: React.FunctionComponent<{ message: string }> = ({ message }) => {
    return <div>{message}</div>
};



export default App;

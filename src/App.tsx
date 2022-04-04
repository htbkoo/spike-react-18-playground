import React, { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";

import "./App.css";

const ControlPanel = () => {
    const [clickCount, setClickCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleClick = () => {
        setClickCount((c) => c + 1);
        setFlag((f) => !f);
        setClickCount((c) => c + 1);
    };
    useEffect(() => {
        const intervalId = setInterval(() => handleClick(), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const c = useRef(0);
    c.current += 1;
    console.log(`rendering ControlPanel: ${c.current}`);

    return (
        <div>
            <button onClick={handleClick}>Click!</button>
            <div>Number of Clicks: {clickCount}</div>
            <div>Is True: {flag.toString()}</div>
            <hr />
            <div>Number of renders: {c.current}</div>
        </div>
    );
};

const InnerApp = () => (
    <div className="App">
        <ControlPanel />
    </div>
);

const App = () => (
    <RecoilRoot>
        <InnerApp />
    </RecoilRoot>
);

export default App;

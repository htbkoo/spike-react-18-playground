import React, { useEffect, useRef, useState } from 'react';
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import './App.css';

// const clickCounts = atom({ key: 'ClickCounts', default: 0 });
// const clickFlag = atom({ key: 'ClickFlag', default: false });
const renderCounts = atom({ key: 'RenderCounts', default: 0 });


const ControlPanel = () => {
    const [, setCounts] = useRecoilState(renderCounts);


    // setCounts((counts) => counts + 1);

    // const [clickCount, setClickCount] = useRecoilState(clickCounts);
    // const [flag, setFlag] = useRecoilState(clickFlag);

    const [clickCount, setClickCount] = useState(0);
    const [flag, setFlag] = useState(false);

    // useEffect(() => {
    //     setCounts((counts) => counts + 1);
    // }, [clickCount])

    const handleClick = () => {
        setClickCount(c => c + 1);
        setFlag(f => !f);
        setClickCount(c => c + 1);
    }
    useEffect(() => {
        const intervalId = setInterval(() => handleClick(), 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    const c = useRef(0);
    c.current += 1;
    console.log(`rendering ControlPanel: ${c.current}`);

    return <div>
        <button onClick={handleClick}>Click!</button>
        <div>Number of Clicks: {clickCount}</div>
        <div>Is True: {flag.toString()}</div>
        <hr />
        <div>Number of renders: {c.current}</div>
    </div>

}

const Counter = () => {
    const counts = useRecoilValue(renderCounts);

    return <div>Number of re-render: {counts}</div>
}

const InnerApp = () => {

    return (
        <div className="App">
            <ControlPanel />
            {/*<Counter />*/}
        </div>
    );

}

const App = () => (<RecoilRoot><InnerApp /></RecoilRoot>)

export default App;

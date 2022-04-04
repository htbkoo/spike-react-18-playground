import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// The following will switch back to React 17 behaviour
// Reference: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
/*
import ReactDOM from 'react-dom';
const container = document.getElementById('root');
ReactDOM.render(<App/>, container);
*/

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    // Disabling React.StrictMode to avoid the unmount/remount simulation testing
    // Reference: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

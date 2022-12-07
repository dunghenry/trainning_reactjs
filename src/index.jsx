import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// identifierPrefix(useId)
const root = ReactDOM.createRoot(document.getElementById('root'), {
    identifierPrefix: 'trandung',
});
function emitComment(id) {
    setInterval(function () {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson-${id}`,
            }),
        );
    }, 3000);
}
emitComment(1);
emitComment(2);
emitComment(3);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

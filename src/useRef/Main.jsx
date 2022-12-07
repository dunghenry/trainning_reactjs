import React from 'react';

const Main = () => {
    const [count, setCount] = React.useState(60);
    const ref = React.useRef();
    const countRef = React.useRef();
    const inputRef = React.useRef();

    React.useEffect(() => {
        countRef.current = count;
    }, [count]);

    React.useEffect(() => {
        const rect = inputRef.current.getBoundingClientRect();
        console.log(rect);
    }, []);

    const handleStart = () => {
        if (ref.current) {
        } else {
            ref.current = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
        }
    };
    const handleStop = () => {
        ref.current && clearInterval(ref.current);
        ref.current = null;
    };
    console.log('State', count);
    console.log('Prev State', countRef.current);
    return (
        <div>
            <h3>useRef</h3>
            <h3 ref={inputRef}>{count}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Main;

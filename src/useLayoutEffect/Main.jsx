import React from 'react';

const Main = () => {
    const [count, setCount] = React.useState(0);

    // Cập nhật state
    // Cập nhật DOM (mutated)
    // Render UI
    // Gọi cleanup nếu deps thay đổi
    // Gọi useEffect callback

    // React.useEffect(() => {
    //     if (count > 3) {
    //         setCount(0);
    //     }
    // }, [count]);

    // Cập nhật state
    // Cập nhật DOM (mutated)
    // Gọi cleanup nếu deps thay đổi (sync)
    // Gọi useLayoutEffect callback (sync)
    // Render UI
    React.useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h3>useLayoutEffect</h3>
            <h3>{count}</h3>
            <button onClick={handleClick}>Count++</button>
        </div>
    );
};

export default Main;

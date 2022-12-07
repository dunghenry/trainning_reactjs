import React from 'react';
import { flushSync } from 'react-dom';
const Main = () => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        //UI bị chớp
        // if (count > 3) {
        //     setCount(0);
        // }
        flushSync(() => {
            if (count > 3) {
                setCount(0);
            }
        });
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

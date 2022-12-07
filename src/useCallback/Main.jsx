import React, { useCallback } from 'react';
import ChildComponent from './ChildComponent';

const Main = () => {
    const [count, setCount] = React.useState(0);
    const handleIncrease = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);
    return (
        <div>
            <h3>Main</h3>
            <h3>{count}</h3>
            <ChildComponent onIncrease={handleIncrease} />
        </div>
    );
};

export default Main;

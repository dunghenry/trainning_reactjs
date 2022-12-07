import React from 'react';
import reducer, { initialState } from './reducer';

const Main = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [payload, setPayload] = React.useState('');
    const handleIncrease = () => {
        dispatch({
            type: 'INCREASE',
            payload: payload || 1,
        });
        setPayload('');
    };
    const handleDecrease = () => {
        dispatch({
            type: 'DECREASE',
            payload: payload || 1,
        });
        setPayload('');
    };
    return (
        <div>
            <h3>useReducer</h3>
            <h4>{state.count}</h4>
            <input
                type="text"
                value={payload}
                placeholder="Enter payload"
                onChange={(e) => setPayload(+e.target.value)}
            />
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Main;

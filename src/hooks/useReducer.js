import React from 'react';
export const useReducer = (reducer, initialState) => {
    const [state, setState] = React.useState(initialState);
    function dispatch(action) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch];
};

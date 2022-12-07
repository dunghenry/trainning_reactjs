import React from 'react';
import Context from './Context';
import logger from './logger';
import reducer, { initialState } from './reducer';
const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState);
    const data = { state, dispatch };
    return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;

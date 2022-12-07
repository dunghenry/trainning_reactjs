import React from 'react';
import Provider from '../store/Provider';
import Todo from './Todo';

const Main = () => {
    return (
        <Provider>
            <Todo />
        </Provider>
    );
};

export default Main;

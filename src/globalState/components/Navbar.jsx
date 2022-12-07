import React from 'react';
import Context from '../store/Context';

const Navbar = () => {
    const { state } = React.useContext(Context);
    const { todos } = state;
    return (
        <div>
            <h3>Todos: {todos.length}</h3>
        </div>
    );
};

export default Navbar;

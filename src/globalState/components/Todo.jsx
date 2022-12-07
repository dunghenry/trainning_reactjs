import React from 'react';
import Context from '../store/Context';
import Navbar from './Navbar';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = () => {
    const { state, dispatch } = React.useContext(Context);
    const { todos } = state;
    return (
        <div>
            <h2>Todo app use useContext and useReducer</h2>
            <Navbar />
            <TodoForm />
            {todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} />;
            })}
        </div>
    );
};

export default Todo;

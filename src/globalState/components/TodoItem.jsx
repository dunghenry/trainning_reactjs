import React from 'react';
import { deleteTodo, setTodoUpdate } from '../store/actions';
import Context from '../store/Context';

const TodoItem = ({ todo }) => {
    const {
        dispatch,
        state: { todos },
    } = React.useContext(Context);
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleUpdate = (id) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo?.id) {
            dispatch(setTodoUpdate(todo));
        }
    };
    return (
        <div style={{ margin: '20px 10px' }}>
            <h4 style={{ padding: '7px 0' }}>TodoItem</h4>
            <h5 style={{ padding: '7px 0' }}>{todo.title}</h5>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
        </div>
    );
};

export default TodoItem;

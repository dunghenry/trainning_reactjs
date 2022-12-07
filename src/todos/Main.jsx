import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setTodo, addTodo, removeTodo, setId, updateTodo } from './actions';
import logger from './logger';
import reducer, { initialState } from './reducer';

const Main = () => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState);
    const { todos, title, idUpdate } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            const todo = {
                id: uuidv4(),
                title,
            };
            dispatch(addTodo(todo));
            dispatch(setTodo(''));
        }
    };
    const handleSetId = (id) => {
        dispatch(setId(id));
        const todo = todos.find((todo) => todo.id === id);
        if (todo?.id) {
            dispatch(setTodo(todo.title));
        }
    };
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        if (idUpdate) {
            dispatch(updateTodo({ id: idUpdate, title }));
            dispatch(setTodo(''));
            dispatch(setId(undefined));
        }
    };
    const handleClearButton = () => {
        dispatch(setTodo(''));
        dispatch(setId(undefined));
    };
    return (
        <div>
            <h3>Todo app</h3>
            <form onSubmit={!idUpdate ? handleSubmit : handleSubmitUpdate}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => dispatch(setTodo(e.target.value))}
                />
                {idUpdate ? (
                    <button type="submit">Update</button>
                ) : (
                    <button type="submit">Add</button>
                )}
                {idUpdate && (
                    <button type="button" onClick={() => handleClearButton()}>
                        x
                    </button>
                )}
            </form>
            <ul>
                {todos.map((todo) => {
                    return (
                        <div key={todo?.id}>
                            <li>
                                {todo.title}
                                <button
                                    style={{ padding: '5px 5px' }}
                                    onClick={() => dispatch(removeTodo(todo?.id))}
                                >
                                    Delete
                                </button>
                                <button
                                    style={{ padding: '5px 5px' }}
                                    onClick={() => handleSetId(todo.id)}
                                >
                                    Update
                                </button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Main;

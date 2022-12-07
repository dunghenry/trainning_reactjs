import { ADD_TODO, DELETE_TODO, SET_TODO_UPDATE, UPDATE_TODO } from './constans';
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const setTodoUpdate = (payload) => {
    return {
        type: SET_TODO_UPDATE,
        payload,
    };
};

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload,
    };
};

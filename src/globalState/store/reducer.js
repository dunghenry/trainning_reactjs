import { ADD_TODO, DELETE_TODO, SET_TODO_UPDATE , UPDATE_TODO} from './constans';
export const initialState = {
    todos: [
        {
            id: 1,
            title: 'Xin chao',
        },
    ],
    todoUpdate: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case SET_TODO_UPDATE:
            return {
                ...state,
                todoUpdate: action.payload,
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.title = action.payload.title;
                    }
                    return todo;
                }),
                todoUpdate: {}
            };
        default:
            return state;
    }
};
export default reducer;

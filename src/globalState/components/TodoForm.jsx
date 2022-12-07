import React from 'react';
import Context from '../store/Context';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, updateTodo } from '../store/actions';
const TodoForm = () => {
    const {
        dispatch,
        state: { todoUpdate },
    } = React.useContext(Context);
    const [title, setTitle] = React.useState('');
    React.useEffect(() => {
        if (todoUpdate?.title) {
            setTitle(todoUpdate?.title);
        }
    }, [todoUpdate?.title]);
    const handleAdd = (e) => {
        e.preventDefault();
        if (title) {
            dispatch(addTodo({ id: uuidv4(), title }));
        }
        setTitle('');
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateTodo({
                ...todoUpdate,
                title,
            }),
        );
        setTitle('');
    };
    return (
        <div>
            <form onSubmit={todoUpdate?.id ? handleUpdate : handleAdd}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">{todoUpdate?.id ? 'Update' : 'Add'}</button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;

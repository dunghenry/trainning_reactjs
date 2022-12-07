import React from 'react';
import Content from './Content';
const Main = () => {
    const [todos, setTodos] = React.useState([]);
    const getData = React.useCallback((type) => {
        return fetch(`https://jsonplaceholder.typicode.com/${type}`);
    }, []);
    const fetchTodos = () => {
        getData('todos')
            .then((res) => res.json())
            .then((todos) => setTodos(todos));
    };
    return (
        <div>
            <h3>Main</h3>
            <p>{JSON.stringify(todos)}</p>
            <button onClick={fetchTodos}>Fetch todos</button>
            <Content getData={getData} />
        </div>
    );
};

export default Main;

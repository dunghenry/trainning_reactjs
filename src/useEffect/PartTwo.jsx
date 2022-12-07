import { useEffect, useState } from 'react';
const PartTwo = () => {
    const [todos, setTodos] = useState([]);
    // Callback được gọi sau khi component được mounted
    // Callback chỉ gọi 1 lần sau khi component được mounted
    useEffect(() => {
        //C1

        // (async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=2');
        //     const data = await response.json();
        //     console.log(data);
        // })();

        //C2
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .then((response) => response.json())
            .then((todos) => setTodos(todos));
    }, []);
    return (
        <div>
            <h3>PartTwo</h3>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <li>{todo.title}</li>
                    </div>
                );
            })}
        </div>
    );
};

export default PartTwo;

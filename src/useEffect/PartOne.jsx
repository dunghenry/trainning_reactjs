import React, { useEffect } from 'react';

const PartOne = () => {
    const [title, setTitle] = React.useState('');
    // useEffect(callback)
    // Callback được gọi ngay sau khi component được mounted
    // Callback sẽ được gọi lại khi component bị re-render
    // Callback được gọi sau khi component thêm element vào DOM

    useEffect(() => {
        // Mỗi khi title thay đổi component re-render đồng thời console.log chạy
        document.title = title;
        console.log('Re-render');
    });

    const addElement = () => {
        const root = document.getElementById('demo');
        const p = document.createElement('h1');
        p.innerText = 'Xin chao';
        root.appendChild(p);
    };
    return (
        <div id="demo">
            <h3>PartOne</h3>
            <h3>{title}</h3>
            <input
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
            />
            {console.log('Render')}
            <button onClick={addElement}>Add element</button>
        </div>
    );
};

export default PartOne;

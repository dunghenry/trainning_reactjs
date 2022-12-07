import React from 'react';
import ChildComponent from './ChildComponent';
const Main = () => {
    const [title, setTitle] = React.useState('');
    return (
        <div>
            <h3>Main</h3>
            <ChildComponent />
            <input type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
    );
};

export default Main;

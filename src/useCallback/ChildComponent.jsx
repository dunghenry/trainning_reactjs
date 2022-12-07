import React from 'react';

const ChildComponent = ({ onIncrease }) => {
    console.log('Render');
    return (
        <div>
            <h3>ChildComponent</h3>
            <button onClick={onIncrease}>count++</button>
        </div>
    );
};

export default React.memo(ChildComponent);

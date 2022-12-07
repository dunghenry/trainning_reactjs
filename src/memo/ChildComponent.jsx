import React from 'react';
const ChildComponent = () => {
    console.log('ChildComponent render');
    return (
        <div>
            <h3>ChildComponent</h3>
        </div>
    );
};

export default React.memo(ChildComponent);

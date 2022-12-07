import React from 'react';

const Main = () => {
    const id = React.useId();

    return (
        <div>
            <h3>useId</h3>
            <label htmlFor={id}>First Name</label>
            <div>
                <input id={id} type="text" />
            </div>
        </div>
    );
};

export default Main;

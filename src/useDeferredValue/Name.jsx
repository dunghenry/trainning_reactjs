import React from 'react';

const Name = ({ data }) => {
    const deferedValue = React.useDeferredValue(data);
    return (
        <div>
            {deferedValue.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </div>
    );
};

export default Name;

import React from 'react';

const Name = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </div>
    );
};

export default Name;

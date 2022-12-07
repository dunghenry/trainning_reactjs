import React from 'react';
const TwowayBinding = () => {
    const [info, setInfo] = React.useState({
        name: '',
        age: 22,
    });
    const changeValue = (e) => {
        // console.log(e.target.name);
        setInfo((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };
    return (
        <div>
            <h3>TwowayBinding</h3>
            <h4>Name: {info.name}</h4>
            <input type="text" name="name" value={info.name} onChange={(e) => changeValue(e)} />
            <h4>Age: {info.age}</h4>
            <input type="number" name="age" value={info.age} onChange={(e) => changeValue(e)} />
        </div>
    );
};

export default TwowayBinding;

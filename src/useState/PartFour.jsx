import React from 'react';
import Button from '@mui/material/Button';
const PartFour = () => {
    const [info, setInfo] = React.useState({
        name: 'Dung',
        age: 21,
    });
    const changeInfo = () => {
        setInfo((prevState) => {
            return { ...prevState, bio: 'Code JavaScript' };
        });
    };
    const resetInfo = () => {
        setInfo((prevState) => {
            if (prevState.bio) {
                delete prevState.bio;
            }
            return { ...prevState };
        });
    };
    return (
        <div>
            <h2>{info?.name}</h2>
            <h2>{info?.age}</h2>
            <h2>{info?.bio}</h2>
            <Button variant="contained" onClick={changeInfo}>
                Set Info
            </Button>
            <Button variant="contained" onClick={resetInfo}>
                Reset Info
            </Button>
        </div>
    );
};

export default PartFour;

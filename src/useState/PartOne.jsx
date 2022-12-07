import { useState } from 'react';
import Button from '@mui/material/Button';
const PartOne = () => {
    const [count, setCount] = useState(0);
    const handlClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <Button variant="contained" onClick={handlClick}>
                Count++
            </Button>
        </div>
    );
};

export default PartOne;

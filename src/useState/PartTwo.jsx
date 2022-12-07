import { useState } from 'react';
import Button from '@mui/material/Button';
const PartTwo = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <Button variant="contained" onClick={handleClick}>
                Count + 2
            </Button>
        </div>
    );
};

export default PartTwo;

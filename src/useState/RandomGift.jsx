import React from 'react';
import Button from '@mui/material/Button';
const gifts = ['CPU i9', 'RAM 32GB RGB', 'Keyboard RGB'];
const RandomGift = () => {
    const [gift, setGift] = React.useState('');
    const getGift = () => {
        const indexGift = Math.floor(Math.random() * gifts.length);
        setGift(gifts[indexGift]);
    };
    return (
        <div>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <Button variant="contained" onClick={getGift}>
                Get Gift
            </Button>
        </div>
    );
};

export default RandomGift;

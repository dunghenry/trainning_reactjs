import { useState } from 'react';
const order = [
    {
        productId: 1,
        price: 100,
    },
    {
        productId: 2,
        price: 200,
    },
    {
        productId: 3,
        price: 300,
    },
];
const PartThird = () => {
    const [total, setTotal] = useState(() => {
        console.log('Calculate the total amount');
        const rs = order.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
        return rs;
    });
    return (
        <div>
            <h1>{total}</h1>
        </div>
    );
};

export default PartThird;

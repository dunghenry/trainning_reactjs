import React from 'react';

const Main = () => {
    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState({
        name: '',
        price: '',
    });
    const inputRef = React.useRef();
    const changeValue = (e) => {
        setProduct((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleAdd = () => {
        setProducts((prev) => [
            ...prev,
            {
                name: product.name,
                price: +product.price,
            },
        ]);
        setProduct({
            name: '',
            price: '',
        });
        inputRef.current.focus();
    };

    const total = React.useMemo(() => {
        const rs = products.reduce((total, product) => {
            console.log('Tinh tien');
            return total + product.price;
        }, 0);
        return rs;
    }, [products.length]);

    return (
        <div>
            <h3>Main</h3>
            <input
                ref={inputRef}
                type="text"
                name="name"
                value={product.name}
                onChange={(e) => changeValue(e)}
            />
            <br />
            <input
                type="text"
                name="price"
                value={product.price}
                onChange={(e) => changeValue(e)}
            />
            <button onClick={handleAdd}>Add</button>
            <h4>Total: {total} </h4>
            {products.map((product, index) => (
                <p key={index}>
                    {product.name}-{product.price}
                </p>
            ))}
        </div>
    );
};

export default Main;

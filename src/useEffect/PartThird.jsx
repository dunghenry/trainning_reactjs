import { useEffect, useState } from 'react';
import './style.css';
const tabs = ['posts', 'comments', 'albums'];
const PartThird = () => {
    const [type, setType] = useState('posts');
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    //Callback luôn được gọi sau khi component được mounted
    //Callback sẽ được gọi lại mỗi khi dependency thay đổi
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [type]);

    //React 17 : Clean up function luôn được gọi trước khi unmounted
    //Clean up function React 18 Callback -> Clean up function -> Callback
    //On scroll
    useEffect(() => {
        const handleScroll = () => {
            // if (window.scrollY >= 300) {
            //     setShow(true);
            //     console.log('set state');
            // } else {
            //     setShow(false);
            // }
            setShow(window.scrollY >= 300);
        };
        window.addEventListener('scroll', handleScroll);
        console.log('Add event');
        return () => {
            console.log('Remove event');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Resize
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleResize);
        };
    }, []);
    const handleClick = () => {
        setShow(false);
        window.scrollTo(0, 0);
    };
    // console.log('Re-render');
    return (
        <div>
            <h3>PartThird</h3>
            <h3>{width}</h3>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={type === tab ? 'active' : ''}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <li>{item.title || item.name}</li>
                    </div>
                );
            })}
            {show && (
                <button className="btn" onClick={handleClick}>
                    Go to top
                </button>
            )}
        </div>
    );
};

export default PartThird;

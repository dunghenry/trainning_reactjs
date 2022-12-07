import React from 'react';

const PartFour = () => {
    const [countdown, setCountdown] = React.useState(10);

    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCountdown(countdown - 1);
    //     }, 1000);
    //     if (countdown == 0) {
    //         setCountdown(0);
    //         clearInterval(timer);
    //     }
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [countdown]);

    //Do React 18 callback -> cleanup -> callback vì thế callback đc gọi 2 lần cho nên bị trừ đi 2
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => {
            // clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h2>PartFour</h2>
            <h2>{countdown}</h2>
        </div>
    );
};

export default PartFour;

import React from 'react';

const useFetch = (url) => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setData([]);
                setIsLoading(false);
                setError(error);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};

export default useFetch;

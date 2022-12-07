import { useEffect } from 'react';
import { fetchReducer } from './fetchReducer';
import { useReducer } from './useReducer';

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null,
    });
    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/request',
                isLoading: true,
            });
            try {
                const res = await fetch(url);
                const { data } = await res.json();
                setTimeout(() => {
                    dispatch({
                        type: 'fetchAPI/success',
                        isLoading: false,
                        data: data,
                        error: null,
                    });
                }, 2000);
            } catch (error) {
                dispatch({
                    type: 'fetchAPI/error',
                    isLoading: false,
                    data: [],
                    error: error,
                });
            }
        })();
    },[url]);
    return { ...state };
};

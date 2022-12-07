import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchReducer } from '../hooks/fetchReducer';
import { useReducer } from '../hooks/useReducer';

const Main = () => {
    // const [state, dispatch] = useReducer(fetchReducer, {
    //     data: [],
    //     isLoading: false,
    //     error: null,
    // });
    // const { data: users, isLoading, error } = state;
    // const fetchUsers = async () => {
    //     dispatch({
    //         type: 'fetchAPI/request',
    //         isLoading: true,
    //     });
    //     try {
    //         const res = await fetch('https://reqres.in/api/users');
    //         const { data } = await res.json();
    //         setTimeout(() => {
    //             dispatch({
    //                 type: 'fetchAPI/success',
    //                 isLoading: false,
    //                 data: data,
    //                 error: null,
    //             });
    //         }, 2000);
    //     } catch (error) {
    //         dispatch({
    //             type: 'fetchAPI/error',
    //             isLoading: false,
    //             data: [],
    //             error: error,
    //         });
    //     }
    // };

    // React.useEffect(() => {
    //     fetchUsers();
    // }, []);

    const { data: users, isLoading, error } = useFetch('https://reqres.in/api/users');
    if (error) {
        return <p>Something wrong</p>;
    }

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <>
            {users.map((user, index) => {
                return (
                    <p key={index}>
                        {user.first_name} {user.last_name}
                    </p>
                );
            })}
        </>
    );
};

export default Main;

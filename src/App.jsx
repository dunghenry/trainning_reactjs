import React from 'react';
import Main from './customHook/Main';
import useClock from './useClock';
import ThemeProvider from './useContext/ThemeContext';
import useFetch from './useFetch';

const App = () => {
    const [display, setDisplay] = React.useState(false);
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const { timeString } = useClock();
    return (
        <div>
            {/* <button onClick={() => setDisplay(!display)}>Toggle</button> */}
            {/* <Main /> */}
            <p>{timeString}</p>
        </div>
    );
};

export default App;

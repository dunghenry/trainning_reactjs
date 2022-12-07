import React from 'react';
import names from '../data/index.json';
import Name from './Name';
const Main = () => {
    const [searchInput, setSearchInput] = React.useState('');

    //C1
    // const deferedValue = React.useDeferredValue(searchInput);
    // const data = React.useMemo(() => {
    //     return names.map((name) => {
    //         const index = name.indexOf(deferedValue);
    //         return index === -1 ? (
    //             <p>{name}</p>
    //         ) : (
    //             <p>
    //                 {name.slice(0, index)}
    //                 <span style={{ backgroundColor: 'yellow' }}>
    //                     {name.slice(index, index + deferedValue.length)}
    //                 </span>
    //                 {name.slice(index + deferedValue.length)}
    //             </p>
    //         );
    //     });
    // }, [deferedValue]);

    const data = React.useMemo(() => {
        return names.map((name) => {
            const index = name.indexOf(searchInput);
            return index === -1 ? (
                <p>{name}</p>
            ) : (
                <p>
                    {name.slice(0, index)}
                    <span style={{ backgroundColor: 'yellow' }}>
                        {name.slice(index, index + searchInput.length)}
                    </span>
                    {name.slice(index + searchInput.length)}
                </p>
            );
        });
    }, [searchInput]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <h3>Form</h3>
            <label>Search</label>
            <input type="text" onChange={handleChange} value={searchInput} />
            <Name data={data} />
        </div>
    );
};

export default Main;

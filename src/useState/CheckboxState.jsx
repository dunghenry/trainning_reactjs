import React from 'react';
const courses = [
    {
        id: 1,
        name: 'HTML / CSS',
    },
    {
        id: 2,
        name: 'JavaScript',
    },
    {
        id: 3,
        name: 'ReactJS',
    },
];
const CheckboxState = () => {
    const [checked, setChecked] = React.useState([]);
    const handleChecked = (id) => {
        if (!checked.includes(id)) {
            setChecked((prevState) => [...prevState, id]);
        } else {
            const filterChecked = checked.filter((checked) => checked !== id);
            setChecked(filterChecked);
        }
    };
    const getCourses = () => {
        let data = [];
        checked.map((item) => {
            courses.map((course) => {
                if (course.id === item) {
                    data.push(course);
                }
            });
        });
        alert(JSON.stringify(data));
    };
    return (
        <div>
            <h2>CheckboxState</h2>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            id={course.id}
                            onChange={() => handleChecked(course.id)}
                        />
                        <label htmlFor={course.id}>{course.name}</label>
                    </div>
                );
            })}
            <button onClick={getCourses}>Get Course(s)</button>
        </div>
    );
};

export default CheckboxState;

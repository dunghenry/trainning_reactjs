import React from 'react';
import Button from '@mui/material/Button';
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
const RadioState = () => {
    const [checked, setChecked] = React.useState(1);
    const handleCourse = () => {
        const course = courses.find((c) => c.id === checked);
        alert(JSON.stringify(course));
    };
    return (
        <div>
            <h3>RadioState</h3>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            id={course.id}
                            checked={checked === +course.id}
                            type="radio"
                            onChange={() => setChecked(course.id)}
                        />
                        <label htmlFor={course.id}>{course.name}</label>
                    </div>
                );
            })}
            <Button variant="contained" onClick={handleCourse}>Get Course</Button>
        </div>
    );
};

export default RadioState;

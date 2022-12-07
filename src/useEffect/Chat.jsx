import React from 'react';
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì?',
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?',
    },
    {
        id: 3,
        name: 'Arrow function!',
    },
];
const Chat = () => {
    const [active, setActive] = React.useState(1);
    React.useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${active}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${active}`, handleComment);
        };
    }, [active]);
    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{ color: lesson.id === active ? 'red' : '#333' }}
                        onClick={() => setActive(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Chat;

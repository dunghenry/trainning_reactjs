import React from 'react';

const Content = ({ getData }) => {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        console.log('Render');
        getData('posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, [getData]);
    return (
        <div>
            <h3>Content</h3>
            <p>{JSON.stringify(posts)}</p>
        </div>
    );
};

export default Content;

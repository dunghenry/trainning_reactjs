import React from 'react';
import Video from './Video';

const Main = () => {
    const videoRef = React.useRef();

    const handlePause = () => {
        videoRef.current.pause();
    };

    const handlePlay = () => {
        videoRef.current.play();
    };
    return (
        <div>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
};

export default Main;

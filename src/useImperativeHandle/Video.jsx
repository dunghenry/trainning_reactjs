import React from 'react';
import video from '../data/video.mp4';
const Video = (_, ref) => {
    const videoRef = React.useRef();
    React.useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play();
        },
        pause: () => {
            videoRef.current.pause();
        },
    }));
    return (
        <div>
            <video ref={videoRef} width={200} src={video} />
        </div>
    );
};

export default React.forwardRef(Video);

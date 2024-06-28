// YouTubeVideo.js
import React from 'react';
import YouTube from 'react-youtube';
import './YouTubeVideo.css'; // Import your CSS file

const YouTubeVideo = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="youtube-video-container">
            <YouTube videoId={videoId} opts={opts} className="youtube-player" />
        </div>
    );
};

export default YouTubeVideo;

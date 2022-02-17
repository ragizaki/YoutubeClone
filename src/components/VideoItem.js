import React from 'react';

// Styles
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const { thumbnails, title } = video.snippet;
    return (
        <div onClick={() => onVideoSelect(video)} className='item video-item'>
            <img className='ui image' src={thumbnails.medium.url} alt={title} />
            <div className='content'>
                <div className='header'>{title}</div>
            </div>
        </div>
    );
};

export default VideoItem;

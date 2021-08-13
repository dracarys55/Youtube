import React from 'react';
import './componentSstyles.scss';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='video-item item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className='ui  image snippet-img'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
        <div className='channel-title'>{video.snippet.channelTitle}</div>
        <div className='content-description'> 觀看次數 : 10萬次 ▪ 1 個月前</div>
      </div>
    </div>
  );
};

export default VideoItem;

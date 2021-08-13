import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  }); //把從videos 拿到的 Array 每一個都進去 VideoItem 裡面跑

  return <div className='ui relaxed  list'>{renderedList}</div>;
};

export default VideoList;

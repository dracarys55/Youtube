import React from 'react';
import './componentSstyles.scss';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  //學習Es2015 ``語法
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='video-detail'>
      <div className='ui embed'>
        <iframe
          allowFullScreen={true}
          src={videoSrc}
          title={video.snippet.title}
        />
      </div>
      <div>
        <h2 className='ui header'>{video.snippet.title}</h2>
        <h4>觀看次數：100,000次 • 2021年8月12日 • {video.snippet.title} </h4>
        <p className='full-detail'>顯示完整資訊</p>
      </div>
    </div>
  );
};

export default VideoDetail;

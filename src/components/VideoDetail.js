import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  //學習Es2015 ``語法
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe
          allowfullscreen='true'
          src={videoSrc}
          title={video.snippet.title}
        />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

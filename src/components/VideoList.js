import React from "react";
import VideoItem from "./VideoItem";
// import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const listedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{listedVideos}</div>;
};

export default VideoList;

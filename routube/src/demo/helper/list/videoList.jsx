import React, { useEffect, useState } from "react";
import VideoItem from "./videoItem";

const VideoList = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "secret",
    },
  };

  fetch(
    "https://youtube.googleapis.com/youtube/v3/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAGH9gmH5nCtFhNbNBYgI9_xV5JY4KIEY4",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  const [video, setVideo] = useState([]);
  useEffect(() => {
    console.log("useEffect");
  }, [video]);
  return (
    <div>
      <VideoItem />
    </div>
  );
};

export default VideoList;

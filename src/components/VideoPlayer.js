import React from 'react'
import video from "./sample.mp4"

const VideoPlayer = (props) => (
    <div>
        <h2>{props.title}</h2>
        <video width="320" height="240" controls>
            <source src={video} type="video/mp4" />
        </video>
    </div>
);
export default VideoPlayer;
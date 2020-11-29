import React, { useState,useEffect } from 'react';
import './video.css';

import VideoItem from './VideoItem';

const VideoList = ({ videoInfo, onVideoSelect}) => {

    const [video,setVideo] = useState([]);

    useEffect(() => {
        if(videoInfo !== undefined){
            setVideo(videoInfo);
        }
        console.log(videoInfo);
    },[videoInfo])


    console.log(video);
    return(

       <section id="videoItem">
           { 
                video.map( (value,index) => {
                    if(index === 1){
                    return <div> <hr /> <VideoItem videos={value} onVideoSelect={onVideoSelect}  key={value.Id}  /> </div> 
                    }
                     return <VideoItem videos={value} onVideoSelect={onVideoSelect} key={value.Id} />
                })
           }
       </section> 
        
    );
}

export default VideoList;
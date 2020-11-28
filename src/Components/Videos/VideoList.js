import React, { useState,useEffect, Fragment } from 'react';
import './video.css';

import VideoItem from './VideoItem';

const VideoList = ({ videoInfo }) => {

    const [video,setVideo] = useState([]);

    useEffect(() => {
        if(videoInfo !== undefined){
            setVideo(videoInfo);
        }
        console.log(videoInfo);
    },[videoInfo])


    console.log(video);
    return(


       <Fragment>
           { 
                video.map( (value,index) => {
                                    return <VideoItem videos={value} />
                })
           }
       </Fragment> 
    // <h1>List </h1>
        
    );
}

export default VideoList;
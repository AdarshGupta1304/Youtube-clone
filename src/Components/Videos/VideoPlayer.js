import React, { useState,useEffect } from 'react';
import './video.css';


import VideoPlayerDetails from './VideoPlayerDetails';


const VideoPlayer = ({videoInfo}) => {

    const [video,setVideo] = useState({

        videoId: '',
        publishTime: '',
        publishAt: '',
        title: '',

    });
    
    useEffect(() => {
        console.log(videoInfo);
        if(videoInfo !== undefined){
            setVideo({
                videoId : videoInfo.id.videoId,
                publishTime: videoInfo.snippet.publishTime,
                publishAt: videoInfo.snippet.publishAt,
                title : videoInfo.snippet.title,
            });
        }
               
    },[videoInfo]);

    // console.log(video);

    return(
        <section className="videoPlayer">
            <iframe width="780" height="450" 
                    src={`https://www.youtube.com/embed/${video.videoId}`} 
                    title={video.videoId}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <VideoPlayerDetails videoInfo={videoInfo} />
        </section>
    );
}

export default VideoPlayer;
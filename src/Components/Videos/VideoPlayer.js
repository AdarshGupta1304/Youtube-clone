import React, { useState,useEffect } from 'react';
import './video.css';


import VideoPlayerDetails from './VideoPlayerDetails';


const VideoPlayer = ({selectedVideo}) => {

    const [video,setVideo] = useState({

        videoId: '',
        publishTime: '',
        publishAt: '',
        title: '',

    });
    
    useEffect(() => {
        console.log(selectedVideo);
        if(selectedVideo !== null){
            setVideo({
                videoId : selectedVideo.id.videoId,
                publishTime: selectedVideo.snippet.publishTime,
                publishAt: selectedVideo.snippet.publishAt,
                title : selectedVideo.snippet.title,
            });
        }
               
    },[selectedVideo]);

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
            <VideoPlayerDetails videoInfo={selectedVideo} />
        </section>
    );
}

export default VideoPlayer;
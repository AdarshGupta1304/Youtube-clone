import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { test } from '../../util';
import './video.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const VideoItem = ({videos, onVideoSelect}) => {

   const [video,setVideo] = useState({
       thumbnailUrl: '',
        title: '',
        channelTitle: '',
        publishedAt: '',
   });

   useEffect(() => {
       console.log(videos)
    if(videos !== undefined){
        // let thumbnail = videos[0].snippet.thumbnails.medium;
        setVideo({
            thumbnailUrl: videos.snippet.thumbnails.medium.url,
            title: videos.snippet.title,
            channelTitle: videos.snippet.channelTitle,
            publishedAt: videos.snippet.publishedAt,
        });
    }
   },[videos]);

   

    return(
        <div onClick={(video) => onVideoSelect={videos}}>
            <Row className="videoItems" >
                <Col md={5}>
                <img src={video.thumbnailUrl} alt="thumbnails" width={160} height={video.thumbnailHeight} />
                </Col>

                <Col md={7}>
                    <span className="thumbnail_Title">{video.title}</span><br />
                    <span className="text-muted channel_title">{video.channelTitle}</span><br />
                    <p className="views"> <span>{test(Math.floor(Math.random()*999999))}</span> * &nbsp;
                    <Moment fromNow>{video.publishedAt}</Moment>
                    </p>
                </Col>
            </Row>
        </div>
        
    );
}

export default VideoItem;
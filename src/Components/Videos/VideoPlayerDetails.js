import React, { useState,useEffect } from 'react';
import './video.css';

import { FaThumbsUp,FaThumbsDown, FaRegThumbsUp,FaRegThumbsDown } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';

import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';



const VideoPlayerDetails = ({videoInfo}) => {

    console.log(videoInfo);

    
    const [like,setLike] = useState(false);
    const [dislike,setDislike] = useState(false); 

    const [video,setVideo] = useState({
        title: '',
        publishedAt: '',
        channelTitle: '',
        description: ''
    });


    useEffect(()=>{
        if(videoInfo !== undefined){
            setVideo({
                title: videoInfo.snippet.title,
                publishedAt: videoInfo.snippet.publishedAt,
                channelTitle: videoInfo.snippet.channelTitle,
                description: videoInfo.snippet.description,


            });
        }
    },[videoInfo]);


    // Event Handlers 
    const likeHandler= () => { setLike(!like); }
    const dislikeHandler = () => { setDislike(!dislike); }


    return(
        <section className="description">
            <h6>{video.title}</h6>
            <div>
                <span className="views">{Math.floor(Math.random(0)*10000000)} views &nbsp; * &nbsp;
                    <Moment format="MMM DD, yyyy">{video.publishedAt}</Moment>
                </span>
                <span className="icons">
                    { like === true ? <FaThumbsUp className="icon like-dislike" onClick={likeHandler} /> : <FaRegThumbsUp className="icon like-dislike" onClick={likeHandler} /> }
                    { dislike === true ? <FaThumbsDown className="icon like-dislike" onClick={dislikeHandler} /> : <FaRegThumbsDown className="icon like-dislike"  onClick={dislikeHandler} /> }
                        
                    <RiShareForwardLine className="icon"  /> <span style={{fontSize: '15px', marginLeft: '0px', marginRight: '3px'}}>SHARE</span>
                    
                    <MdPlaylistAdd className="icon" /> <span  style={{ fontSize: '15px', marginLeft: '0px', marginRight: '3px' }}>SAVE</span>
                    <AiOutlineEllipsis className="icon" />

                </span>
            </div>
            <hr className="hr" />
            <div className="">
                <h6>
                    <span><CgProfile className="icon" style={{marginRight: '15px',}}/></span>{video.channelTitle}
                    <span className="float-right">
                        <Button variant="danger" size="sm">SUBSCRIBE</Button>
                    </span>
                </h6>
                <span className="text-muted mx-4 subs" >{Math.floor(Math.random()*1000)}K subscribers</span>
                <p className="description" >{video.description}</p>
            </div>
            
            
        </section>

    );

}

export default VideoPlayerDetails;
import React from 'react'
import "../Styles/Home.css";
import Carousel from 'react-multi-carousel';
import img from "../images/img.png";
import 'react-multi-carousel/lib/styles.css';
import moment from "moment";

const Home = ({ videos }) => {

    return (
        <div className='home-main'>
            <div className='home-videos-grid'>
                {
                    videos.map((item, id) =>
                        <>
                            <div className='video-box' key={id} onClick="">
                                <img src={item?.snippet?.thumbnails?.high?.url || { img }} alt="thumbnails" />
                                <h6>{item?.snippet?.title}</h6>
                               <h6> 
                                   
                                </h6>
                                <h5>{item?.etag}</h5>
                                <p>{item?.snippet?.channelTitle}</p>
                                <p><span>{moment(item?.snippet?.publishTime).fromNow()}</span><span></span></p>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Home

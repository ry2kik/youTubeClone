import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json?.items);
    }
    
    return (
        <div className="grid grid-cols-3 mx-4 mt-2">
            {
                videos.map(video => (
                    <Link to = { '/watch?v=' + video.id }><VideoCard { ...video } key = { video?.id } /></Link>
                ))
            }
        </div>
    )
}

export default VideoContainer;
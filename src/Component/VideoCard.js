const VideoCard = ({ snippet, statistics }) => {
    return (
        <div className="m-2 mt-4 gap-x-2 cursor-pointer">
            <img src={ snippet?.thumbnails?.high?.url } className="rounded-xl" />
            <p className="mt-2">{ snippet.title }</p>
            <p className="text-gray-400 mt-1">{ snippet.channelTitle }</p>
            <p className="text-gray-400">{ Math.round(statistics.viewCount / 100000, 2) } M views</p>
        </div>
    )
}

export default VideoCard;
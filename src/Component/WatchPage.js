import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/NavSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="m-4 mx-6">
            <iframe
                className="rounded-xl"
                width="750" 
                height="360" 
                src = { "https://www.youtube.com/embed/" + searchParams.get('v') }
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage;
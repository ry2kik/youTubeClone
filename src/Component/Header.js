import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/NavSlice";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/Constant";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store => store.search);

    async function getSearchSuggestion() {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchInput);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchInput]: json[1],
        }));
        console.log(searchCache);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchInput]) {
                setSuggestions(searchCache[searchInput])
            } else {
                getSearchSuggestion();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchInput]);

    return (
        <div className="grid grid-flow-col shadow-lg py-2 sticky top-0 bg-white z-10">
            <div className="col-span-2 flex ms-6 items-center">
                <div className="cursor-pointer me-4">
                    <HiMiniBars3 className="text-2xl" onClick={() => {
                        dispatch(toggleMenu())
                    }} />
                </div>
                <div>
                    {/* <Link to='/'> */}
                    <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="The image not found" className="w-28" />
                    {/* </Link> */}
                </div>
            </div>
            <div className="col-span-8 mt-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-solid shadow py-2 px-6 rounded-full w-3/4 focus:outline-none" value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                {
                    showSuggestion && (<div className="fixed bg-white w-[32rem] rounded-lg shadow-sm mt-1 mx-2">
                        <ul>
                            {
                                (suggestions.length > 0) ? (
                                    suggestions.map((suggestion, index) => (
                                        <li className="flex items-center hover:bg-gray-100 px-4 py-1 rounded-md" key={index}>
                                            <IoSearchOutline />
                                            <span className="ms-2">{suggestion}</span>
                                        </li>
                                    ))
                                ) : (
                                    <></>
                                )
                            }
                        </ul>
                    </div>)
                }

            </div>

            <div className="col-span-2 flex justify-end items-center me-12">
                <CiBellOn className="text-2xl me-5" />
                <span className="relative right-7 bottom-3 bg-red-600 rounded-full text-white text-[10px] px-1">7</span>
                <span className="bg-orange-500 p-3 rounded-full">
                    <LuUser2 className="text-white" />
                </span>
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react";
import YouSection from "./YouSection";
import ExploreSection from "./ExploreSection";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiClockCounterClockwiseLight } from "react-icons/pi";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.nav.isMenuOpen);

    return (!isMenuOpen) ? (
        <aside className="flex">
            <nav className="h-screen duration-300 shadow-sm w-20">
                <ul className="mt-4 px-1">
                    <li className="w-full hover:bg-gray-50 py-4 rounded-md">
                        <AiFillHome className="text-2xl w-full text-center" />
                        <p className="text-[10px] text-center">Home</p>
                    </li>
                    <li className="w-full hover:bg-gray-50 py-4 rounded-md mt-2">
                        <SiYoutubeshorts className="text-2xl w-full text-center" />
                        <p className="text-[10px] text-center">Shorts</p>
                    </li>
                    <li className="w-full hover:bg-gray-50 py-4 rounded-md mt-2">
                        <BsCollectionPlay className="text-2xl w-full text-center" />
                        <p className="text-[10px] text-center">Subscriptions</p>
                    </li>
                    <li className="w-full hover:bg-gray-50 py-4 rounded-md mt-2">
                        <AiOutlinePlaySquare className="text-2xl w-full text-center" />
                        <p className="text-[10px] text-center">You</p>
                    </li>
                    <li className="w-full hover:bg-gray-50 py-4 rounded-md mt-2">
                        <PiClockCounterClockwiseLight className="text-2xl w-full text-center" />
                        <p className="text-[10px] text-center">History</p>
                    </li>

                </ul>
            </nav>
        </aside>
    ) : (
        <aside className="flex">
            <nav className="h-screen duration-300 shadow-sm w-56">
                <ul className="pb-3 border-b-[1px]">
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <AiFillHome className="text-lg" />
                        <span className="ml-4 text-md">Home</span>
                    </li>
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <SiYoutubeshorts className="text-lg" />
                        <span className="ml-4 text-md">Shorts</span>
                    </li>
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <BsCollectionPlay className="text-lg" />
                        <span className="ml-4 text-md">Subscriptions</span>
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <AiOutlinePlaySquare className="text-lg" />
                        <span className="ml-4 text-md">You</span>
                    </li>
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <PiClockCounterClockwiseLight className="text-lg" />
                        <span className="ml-4 text-md">History</span>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;
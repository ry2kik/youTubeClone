import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/NavSlice";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";

const Header = () => {
    const dispatch = useDispatch();

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
            <div className="col-span-8 flex items-center justify-center">
                <input type="text" placeholder="Search" className="border border-solid shadow py-2 px-6 rounded-full w-3/4" />
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
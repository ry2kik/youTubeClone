import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="grid grid-flow-col shadow-lg sticky py-2">
            <div className="col-span-2 flex ms-6 items-center">
                <div className="cursor-pointer me-2">
                    <i className="las la-bars"></i>
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="The image not found" className="w-28" />
                </div>
            </div>
            <div className="col-span-8 flex items-center justify-center">
                <input type="text" placeholder="Search" className="border border-solid shadow py-2 px-6 rounded-full w-3/4" />
            </div>
            <div className="col-span-2 flex justify-end items-center me-12">
                <i className="lar la-user bg-orange-600 p-3 rounded-full text-white"></i>
            </div>
        </div>
    )
}

export default Header;
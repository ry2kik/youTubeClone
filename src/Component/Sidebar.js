import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.nav.isMenuOpen);

    return (!isMenuOpen) ? (
        <aside className="flex">
            <nav className="h-full duration-300 shadow-sm w-20">
                <ul className="mt-4 px-2 fixed w-20">
                    <Link to='/'>
                        <li className="w-full hover:bg-gray-50 py-4 rounded-md">
                            <AiFillHome className="text-2xl w-full text-center" />
                            <p className="text-[10px] text-center">Home</p>
                        </li>
                    </Link>

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
        </aside >
    ) : (
        <aside className="flex sticky top-0">
            <nav className="h-full duration-300 shadow-sm w-56">
                <ul className="fixed w-56">
                    {/* <Link to='/'> */}
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <AiFillHome className="text-lg" />
                        <span className="ml-4 text-md">Home</span>
                    </li>
                    {/* </Link> */}

                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <SiYoutubeshorts className="text-lg" />
                        <span className="ml-4 text-md">Shorts</span>
                    </li>
                    <li className="flex items-center mx-3 mt-2 px-3 py-2 hover:bg-gray-50 rounded-md">
                        <BsCollectionPlay className="text-lg" />
                        <span className="ml-4 text-md">Subscriptions</span>
                    </li>
                    <li className="border-b-[1px] mt-3"></li>
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
import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { FaLocationArrow } from "react-icons/fa";
import { generateRandomName, generateRandomText } from "../utils/Healper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState('');
    const chatMessages = useSelector(store => store.chat.messages);

    const i = useEffect(() => {
        setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomText(20)
            }))
        }, 2000);

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className="mx-6 border w-[350px] h-[430px] shadow rounded-lg overflow-y-scroll">
                <h1 className="border-b-2 p-4 shadow-sm">LiveChat</h1>
                <p className="ps-4 pe-2 flex flex-col-reverse">
                    {
                        chatMessages.map((chats, index) => (<ChatMessages key={index} name={chats.name} message={chats.message} />))
                    }
                </p>
            </div>
            <form className="mx-6 flex flex-row items-center mt-2" onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: 'Raktimabho Ghosh',
                    message: liveMessage
                }));
                setLiveMessage('');
            }}>
                <input type="text" className="w-[300px] ms-1 me-4 border border-red-600 py-1 px-2 focus:outline-none rounded" value={liveMessage} onChange={(e) => {
                    setLiveMessage(e.target.value)
                }} />
                <button>
                    <FaLocationArrow className="fill-red-600" />
                </button>
            </form>
        </>
    )
}

export default LiveChat;
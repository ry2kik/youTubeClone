import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const ChatMessages = ({ name, message }) => {
    return (
        <div className="flex flex-row items-center py-2">
            <FaCircleUser />
            <span className="ms-2 font-bold">{name}</span>
            <span className="ms-2 text-sm text-wrap">{ message }</span>
        </div>
    )
}

export default ChatMessages;
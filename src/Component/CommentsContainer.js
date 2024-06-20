import React from "react";
import { FaUserSecret } from "react-icons/fa6";

const commentData = [
    {
        name: "Raktimabho Ghosh",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        replies: [

        ]
    },
    {
        name: "Raktimabho Ghosh",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        replies: [
            {
                name: "Raktimabho Ghosh",
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                replies: [

                ]
            },
            {
                name: "Raktimabho Ghosh",
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                replies: [
                    {
                        name: "Raktimabho Ghosh",
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                        replies: [
                            {
                                name: "Raktimabho Ghosh",
                                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                                replies: []
                            },
                            {
                                name: "Raktimabho Ghosh",
                                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                                replies: [
                                    {
                                        name: "Raktimabho Ghosh",
                                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                                        replies: [

                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Raktimabho Ghosh",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        replies: [

        ]
    },
    {
        name: "Raktimabho Ghosh",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        replies: [

        ]
    },
    {
        name: "Raktimabho Ghosh",
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        replies: [

        ]
    }
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex flex-row mt-4 bg-gray-100 p-3 rounded-lg">
            <span className="w-9 h-9 bg-orange-500 flex justify-center items-center rounded-full">
                <FaUserSecret className="text-white" />
            </span>
            <div className="ms-4">
                <p className="font-bold mt-1">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comment }) => {
    return comment.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className="ps-5 border-l-2">
                <CommentsList key={index} comment={comment.replies} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className="m-4">
            <h1 className="font-bold text-lg">Comments</h1>
            <CommentsList comment={commentData} />
        </div>
    )
}

export default CommentsContainer;
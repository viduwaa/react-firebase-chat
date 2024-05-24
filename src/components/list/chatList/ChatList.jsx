import React from "react";
import { useState } from "react";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="flex flex-col overflow-hidden">
            <div className="flex items-center justify-between w-full ">
                <div className="flex items-center bg-blue-900 w-full rounded-md px-2 ml-3">
                    <img
                        className="w-4 h-4 mr-2"
                        src="./search.png"
                        alt="search"
                    />
                    <input
                        className="p-1 rounded-lg flex-1 border-none outline-none bg-transparent text-white"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div
                    className="bg-blue-900 p-2 rounded-md ml-2"
                    onClick={() => setAddMode((prev) => !prev)}
                >
                    <img
                        className="w-4 h-4 cursor-pointer"
                        src={addMode ? "./minus.png" : "./plus.png"}
                        alt="plus"
                    />
                </div>
            </div>
            <div className=" bg-opacity-65 p-2 mt-2 rounded-md  overflow-auto scrollbar">
                <div className="flex items-center justify-start gap-3 my-1 p-2 border-b border-b-slate-100">
                    <img
                        className="w-14 h-14 rounded-full"
                        src="./avatar.png"
                        alt=""
                    />
                    <div className="max-w-full whitespace-nowrap overflow-hidden">
                        <span className="font-bold">John Doe</span>
                        <p className="">Hellothere</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ChatList;

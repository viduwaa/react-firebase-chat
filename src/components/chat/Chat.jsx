import React from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    return (
        <div className="flex-[2]">
            <div className="flex items-center justify-between bg-blue-500 py-2 px-4">
                <div className="flex items-center gap-2">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="./avatar.png"
                        alt=""
                    />
                    <div className="texts">
                        <span className="font-bold">John Doe</span>
                        <p className="text-sm">Online</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <img
                        className="w-5 h-5 cursor-pointer object-cover"
                        src="./phone.png"
                        alt=""
                    />
                    <img
                        className="w-5 h-5 cursor-pointer object-cover"
                        src="./video.png"
                        alt=""
                    />
                    <img
                        className="w-5 h-5 cursor-pointer object-cover"
                        src="./info.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="center"></div>
            <div className="flex items-center justify-evenly gap-2 p-4">
                <div className="flex items-center gap-4">
                    <img className="w-6 h-6" src="./img.png" alt="" />
                    <img className="w-6 h-6" src="./camera.png" alt="" />
                    <img className="w-6 h-6" src="./mic.png" alt="" />
                </div>
                <input
                    className="flex-1 p-2 bg-blue-900 border-none outline-none text-white rounded-md"
                    type="text"
                    placeholder="Type a message"
                />
                <div className="emojis">
                    <img className="w-6 h-6" src="./emoji.png" alt="" />
                    <EmojiPicker />
                </div>
                <button className="bg-blue-400 p-2 rounded-lg">Send</button>
            </div>
        </div>
    );
};

export default Chat;

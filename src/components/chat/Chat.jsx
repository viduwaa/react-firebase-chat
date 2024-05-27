import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    },[])

    return (
        <div className="flex flex-col flex-[2]">
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
            <div className="flex flex-col flex-1 bg-transparent p-4 overflow-auto gap-4 scrollbar">
                <div className="flex owner">
                    <div className="flex flex-col text max-w-[75%]">
                        <img src="./testphoto.jpg" alt="" />
                        <p className="p-2 rounded-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Et,
                        </p>
                        <span className="text-xs">1min ago</span>
                    </div>
                </div>

                <div className="flex justify-start gap-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="./avatar.png"
                        alt=""
                    />
                    <div className="text max-w-[75%]">
                        <img src="./testphoto.jpg" alt="" />
                        <p className="p-2 rounded-md bg-blue-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Et, doloribus, expedita ratione cupiditate
                            asperiores sequi ipsam at dignissimos ullam
                            delectus, adipisci incidunt. Eum incidunt molestiae,
                            itaque voluptatem magni quod odio!
                        </p>
                        <span className="text-xs">1min ago</span>
                    </div>
                </div>

                <div ref={endRef}></div>
                
            </div>
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
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <div className="emojis relative">
                    <img
                        className="w-6 h-6"
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker absolute bottom-10 right-0">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="bg-blue-400 p-2 rounded-lg">Send</button>
            </div>
        </div>
    );
};

export default Chat;

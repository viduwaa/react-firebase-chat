import React from "react";
import { useState } from "react";
import "./detail.css";

const Detail = () => {
    const [blockUser, setBlockUser] = useState(false);
    const changeButton = () => {
        setBlockUser((prev) => !prev);
    };

    return (
        <div className="flex-1 border-l border-l-slate-100 p-4 overflow-auto scrollbar">
            <div className="user flex items-center flex-col p-4 justify-center">
                <img
                    className="w-24 h-24 object-cover rounded-full"
                    src="./avatar.png"
                    alt=""
                />
                <h2>John Doe</h2>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div className="info flex flex-col gap-2">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                        <div className="item">
                            <div className="detail">
                                <img src="./testphoto.jpg" alt="" />
                                <span>vesak.png</span>
                            </div>
                            <img
                                className="w-5 h-5 cursor-pointer"
                                src="./download.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button
                    className={`${
                        blockUser ? "bg-green-400" : "bg-red-400"
                    } rounded-md p-2`}
                    onClick={changeButton}
                >
                    {blockUser ? "Unblock User" : "Block User"}
                </button>
				<button className="p-2 bg-gray-500 rounded-md">
					Log out
				</button>
            </div>
        </div>
    );
};

export default Detail;

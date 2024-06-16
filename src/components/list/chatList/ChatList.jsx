import React, { useEffect, useState } from "react";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);

    const { currentUser } = useUserStore();

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                const items = res.data().chats || [];

                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "users", item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);

                    const user = userDocSnap.data();

                    return { ...item, user };
                });

                const chatData = await Promise.all(promises);

                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            }
        );

        return () => {
            unSub();
        };
    }, [currentUser.id]);

    const handleSelect =async(chat)

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
            {chats.map((chat) => (
                <div
                    className="bg-opacity-65 p-2 mt-2 rounded-md overflow-auto scrollbar"
                    key={chat.chatId}
                    onClick={()=>{handleSelect(chat)}}
                >
                    <div className="flex items-center justify-start gap-3 my-1 p-2 border-b border-b-slate-100">
                        <img
                            className="w-14 h-14 rounded-full object-cover"
                            src={chat.user.avatar || "./avatar.png"}
                            alt=""
                        />
                        <div className="max-w-full whitespace-nowrap overflow-hidden">
                            <span className="font-bold">{chat.user.username}</span>
                            <p>{chat.lastMessage}</p>
                        </div>
                    </div>
                </div>
            ))}
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;

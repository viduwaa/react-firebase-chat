import React, { useState } from "react";
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { set } from "firebase/database";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
    const [user, setUser] = useState(null);
    const {currentUser} = useUserStore()
    const handleSearch = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            // Create a reference to the cities collection

            const userRef = collection(db, "users");

            // Create a query against the collection.
            const q = query(userRef, where("username", "==", username));

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setUser(querySnapshot.docs[0].data());
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleAdd = async () => {
        const chatRef = collection(db,"chats")
        const userChatsRef = collection(db,"userchats")
        try {
            const newChatRef = doc(chatRef)
            await setDoc(newChatRef,{
                createdAt: serverTimestamp(),
                messages : [],

            })

            await updateDoc(doc(userChatsRef,user.id),{
                chats: arrayUnion({
                    chatId:newChatRef.id,
                    lastmMessage :"",
                    receiverId:currentUser.id,
                    updatedAt:Date.now()
                })
            })

            await updateDoc(doc(userChatsRef,currentUser.id),{
                chats: arrayUnion({
                    chatId:newChatRef.id,
                    lastmMessage :"",
                    receiverId:user.id,
                    updatedAt:Date.now()
                })
            })

            console.log(newChatRef.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="shadow-[0px_0px_20px_2px_#1a202c] border h-80 bg-blue-300 rounded-lg p-2 flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form className="p-2 flex gap-2" onSubmit={handleSearch}>
                <input
                    className="p-1 rounded-md text-black"
                    type="text"
                    placeholder="Username"
                    name="username"
                />
                <button className="p-1 bg-blue-500 rounded-lg">Search</button>
            </form>
            {user && <div className="flex w-full items-center border-b p-2">
                    <div className="flex flex-1 gap-3 items-center">
                        <img
                            className="rounded-full w-10 h-10 object-cover"
                            src={user.avatar || "./avatar.png"}
                            alt=""
                        />
                        <span>{user.username}</span>
                    </div>
                    <button className="text-sm p-2 bg-blue-800 rounded-lg" onClick={handleAdd}>
                        Add User
                    </button>
                </div>
            }
        </div>
    );
};

export default AddUser;

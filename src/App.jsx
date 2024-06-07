import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

const App = () => {
    
	const {currentUser,isLoading,fetchUserInfo} = useUserStore()

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid);
            } else {
                fetchUserInfo(null);
            }
        });

        return () => {
            unSub();
        };
    }, [fetchUserInfo]);

	console.log(currentUser)

	if (isLoading) return <div className="p-3 text-lg rounded-lg bg-blue-950 text-white">Loading...</div>

    return (
        <div className=" bg-blue-500 bg-opacity-80 w-[90vw] h-[90vh] rounded-2xl flex backdrop-blur-sm">
            {currentUser ? (
                <>
                    <List />
                    <Chat />
                    <Detail />
                </>
            ) : (
                <Login />
            )}

            <Notification />
        </div>
    );
};

export default App;

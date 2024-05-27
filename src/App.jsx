import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
	const user = false;
    return (
        <div className=" bg-blue-500 bg-opacity-80 w-[90vw] h-[90vh] rounded-2xl flex backdrop-blur-sm">
			{
				user ? (
					<>
					<List />
					<Chat />
					<Detail />
					</>
				) : (
					<Login />
				)
			}
			
			<Notification />
		</div>
    );
};

export default App;

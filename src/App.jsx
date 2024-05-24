import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";

const App = () => {
    return (
        <div className=" bg-blue-500 bg-opacity-80 w-[90vw] h-[90vh] rounded-2xl flex backdrop-blur-sm">
			<List />
			<Chat />
			<Detail />
		</div>
    );
};

export default App;

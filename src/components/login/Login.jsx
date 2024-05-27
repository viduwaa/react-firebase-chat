import React from "react";
import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleLogin = e =>{
        e.preventDefault()
        toast.warn("Hello")
    }
    return (
        <div className="flex w-full gap-5">
            <div className="mt-[10%] flex flex-1 p-5 flex-col items-center ">
                <h2 className="text-xl">Welcome back !</h2>
                <form onSubmit={handleLogin} className="login flex flex-col w-4/6 gap-3 p-2">
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="p-2 bg-blue-900 w-2/5 m-auto rounded-lg hover:bg-blue-700">Sign In</button>
                </form>
            </div>
            <div className="flex flex-1 p-5 flex-col items-center border-l-2 border-l-white">
                <h2 className="mt-[10%] text-xl">Create an Account</h2>
                <form className="login flex flex-col w-4/6 gap-3 p-2 ">
                    <input
                        type="file"
                        id="file"
                        className="hidden"
                        onChange={handleAvatar}
                    />
                    <label
                        className="flex  flex-col items-center cursor-pointer"
                        htmlFor="file"
                    >
                        <img
                            className="rounded-full"
                            src={avatar.url || "./avatar.png"}
                            alt=""
                        />
                        Upload an Image
                    </label>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button className="p-2 bg-blue-900 w-2/5 m-auto rounded-lg hover:bg-blue-700">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

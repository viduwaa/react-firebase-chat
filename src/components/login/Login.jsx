import React from "react";
import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            let imgUrl = null;
            if (avatar.file) {
                imgUrl = await upload(avatar.file);
            }

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success(
                "User created successfully! Please login to continue."
            );
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex w-full gap-5">
            <div className="mt-[10%] flex flex-1 p-5 flex-col items-center ">
                <h2 className="text-xl">Welcome back !</h2>
                <form
                    onSubmit={handleLogin}
                    className="login flex flex-col w-4/6 gap-3 p-2"
                >
                    <input type="email" placeholder="Email" name="email" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button
                        disabled={loading}
                        className="p-2 bg-blue-900 w-2/5 m-auto rounded-lg hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-900"
                    >
                        {loading ? "Please Wait" : "Login"}
                    </button>
                </form>
            </div>
            <div className="flex flex-1 p-5 flex-col items-center border-l-2 border-l-white">
                <h2 className="mt-[10%] text-xl">Create an Account</h2>
                <form
                    className="login flex flex-col w-4/6 gap-3 p-2 "
                    onSubmit={handleRegister}
                >
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
                            className="rounded-full w-28 h-28 object-cover"
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
                    <button
                        disabled={loading}
                        className="p-2 bg-blue-900 w-2/5 m-auto rounded-lg hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-900 "
                    >
                        {loading ? "Please Wait" : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

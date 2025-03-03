import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            {/* Top Header */}
            <header
                className="w-full bg-transparent text-white flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50">
                <div className="flex-row flex justify-self-start">
                    <h1 className="text-4xl ml-4 font-mono font-bold align-bottom">Тихий Дэн</h1>
                    <nav className="flex ">
                        <ul className="flex space-x-4">
                            <li className="group relative">
                                <button
                                    className="px-4 py-2 bg-transparent  font-mono text-2xl hover:bg-gray-800 ml-6 rounded font-poppins">Игра
                                </button>
                                <ul className="absolute left-6 w-40 bg-gray-800 hidden group-hover:block">
                                    <li className="px-4 py-2 hover:bg-gray-700">Patches</li>
                                    <li className="px-4 py-2 hover:bg-gray-700">Game updates</li>
                                    <li className="px-4 py-2 hover:bg-gray-700">News</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="flex items-center">
                            <button
                                className="px-4 py-2 bg-transparent font-mono text-2xl hover:bg-gray-800 ml-6 rounded font-poppins">Новости
                            </button>
                        </div>
                    </nav>
                </div>

                <button
                    className="px-6 py-2 mr-6 border-2 border-gray-700 text-white font-mono text-2xl font-bold rounded hover:bg-gray-700 hover:text-white">
                    PLAY FOR FREE
                </button>


            </header>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 overflow-auto">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;

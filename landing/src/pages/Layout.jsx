import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { ScrollContext } from "./ScrollContext";
import new2 from "../assets/images/brebsi.png";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePlayClick = () => {
        setShowFullScreenImage(true);
        setFadeOut(false);

        // Через 2.7 секунды начинаем затухание
        setTimeout(() => {
            setFadeOut(true);
        }, 2700);

        // Через 3 секунды полностью убираем
        setTimeout(() => {
            setShowFullScreenImage(false);
        }, 3000);
    };

    return (
        <div className="h-screen flex flex-col relative">
            {/* Полноэкранное изображение с анимацией */}
            {showFullScreenImage && (
                <div
                    className={`fixed inset-0 bg-black opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ${
                        fadeOut ? "opacity-20" : "opacity-100"
                    }`}
                >
                    <img
                        src={new2}
                        alt="Brepsi"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}

            {/* Header */}
            <header className="w-full bg-black text-white flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-40">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold ml-2 sm:ml-4">Тихий Дэн</h1>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <nav className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${menuOpen ? "flex" : "hidden"} absolute md:relative top-full md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent z-40`}>
                        <ul className="flex flex-col md:flex-row w-full md:w-auto md:space-x-4">
                            <li>
                                <button
                                    onClick={() => scrollTo("illustrations")}
                                    className="px-4 py-2 text-lg sm:text-xl bg-transparent font-mono hover:bg-gray-800 w-full text-left md:text-center"
                                >
                                    Иллюстрации
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo("news")}
                                    className="px-4 py-2 text-lg sm:text-xl bg-transparent font-mono hover:bg-gray-800 w-full md:w-auto text-left md:text-center"
                                >
                                    Новости
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <a
                        href="https://disk.yandex.ru/d/dSHplgnA2S-RyQ"
                        className="hidden md:block px-4 py-2 mr-2 sm:mr-6 border-2 border-gray-700 text-white font-mono text-xl font-bold rounded hover:bg-gray-700 hover:text-white"
                    >
                        PLAY FOR FREE
                    </a>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 bg-gray-100 mt-16 overflow-auto"
                  style={{ scrollbarWidth: 'none', scrollbarColor: 'transparent' }}>
                <ScrollContext.Provider value={scrollTo}>
                    <Outlet />
                </ScrollContext.Provider>
            </main>
        </div>
    );
};

export default Layout;

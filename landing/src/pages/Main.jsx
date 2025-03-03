import React from "react";
import banner from '../assets/images/img.png';
import video from '../assets/images/youtube_B35lkeCBOsM_1920x1080_h264.mp4';

const Main = () => {
    return (
        <div className="flex flex-col items-center min-w-full">
            {/* Video Banner */}
            <div className="relative w-full max-h-[700px] h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={video}
                />
                <div className="absolute inset-0 flex columns-1 justify-start bg-black bg-opacity-50">
                    <div className="flex flex-col mt-64">
                        <h2 className="text-7xl text-white font-bold ml-20 font-monomakh">"Отлично, прикольно."</h2>
                        <h2 className="text-3xl mt-3 text-white font-bold font-poppins ml-28">- Brepsi Co Studios</h2>
                    </div>

                </div>
                {/* Gradient overlay to transition to next block */}
                <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Latest News */}
            <div className="w-full bg-black p-6 justify-center items-center">
                <div className="justify-self-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-poppins">Последние новости</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Здесь будут загружаться превью статей */}
                        <div className="bg-white shadow-md p-4 rounded">Статья 1</div>
                        <div className="bg-white shadow-md p-4 rounded">Статья 2</div>
                        <div className="bg-white shadow-md p-4 rounded">Статья 3</div>
                    </div>
                </div>

            </div>

            {/* Download Banner */}
            <div className="w-full bg-black text-white py-12 flex flex-col items-center">
                <img src={banner} alt="Download Banner" className="w-full max-w-4xl mb-6 rounded-lg"/>
                <button className="px-6 py-3 bg-transparent font-bold text-lg rounded hover:bg-gray-800">
                    Скачать бесплатно
                </button>
            </div>
        </div>
    );
};

export default Main;

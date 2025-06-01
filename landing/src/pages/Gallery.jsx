import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import first from '../assets/images/5418004886768969559.jpg';
import second from '../assets/images/5418004886768969560.jpg';
import third from '../assets/images/5418004886768969561.jpg';
import four from '../assets/images/2682112982664718275.jpg';
import five from '../assets/images/5418004886768969567.jpg';
import six from '../assets/images/Нью Йорк_1.jpg';
import seven from '../assets/images/img_3.png';
import eight from '../assets/images/6834092e-98d5-486b-b3cc-75b0191785db.webp';
import nine from '../assets/images/5409347989341858358.jpg';
import ten from '../assets/images/5418246843751592402.jpg';
import eleven from '../assets/images/5409347989341858357.jpg';
import twelve from '../assets/images/image (1).jpg';
import pr1 from '../assets/images/photo_5417942652692853444_y.jpg';
import pr2 from '../assets/images/photo_5417942652692853431_y.jpg';
import pr3 from '../assets/images/photo_5417942652692853452_y.jpg';
import thir from '../assets/images/image_2025-03-28_03-33-56.png';
import smert from '../assets/images/5211186925677965583.jpg';

import new1 from '../assets/images/home.jpg';
import new2 from '../assets/images/brebsi.png';
import new3 from '../assets/images/tobecont.jpg';
import new4 from '../assets/images/hand_watch.png';

import f1 from '../assets/images/atele.jpg'
import f2 from '../assets/images/banki.jpg'
import f3 from '../assets/images/envelope.jpg'
import f4 from '../assets/images/lynya.jpg'
import f5 from '../assets/images/lynya_inside.jpg'
import f6 from '../assets/images/motel_inside.jpg'
import f7 from '../assets/images/taxiatday.jpg'
import f8 from '../assets/images/whiskey.jpg'


const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [f1, f2, f3, f6, f4, f5, f7, f8, new1, new3, new4, new2, six, nine, ten, seven, eleven, eight, twelve, thir];

    const openModal = (img) => {
        setCurrentImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id="illustrations" className="w-full bg-black p-6">
            <h2 className="text-3xl font-bold text-white mb-6 font-poppins text-center">Иллюстрации</h2>

            {/* 🟩 Мобильная галерея */}
            <div className="block lg:hidden px-4">
                <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={20} slidesPerView={1}>
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative overflow-hidden rounded-xl cursor-pointer"
                                onClick={() => openModal(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-72 object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-40"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* 🟦 Десктопная сетка */}
            <div className="hidden lg:grid px-24 grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden group rounded-xl cursor-pointer"
                        onClick={() => openModal(img)}
                    >
                        <img
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80 rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img src={currentImage} alt="Full view" className="w-auto h-auto max-w-full max-h-[90vh]" />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl px-3.5 bg-black bg-opacity-50 rounded-full p-2"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

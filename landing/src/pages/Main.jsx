import React, {useEffect, useState} from "react";

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

import video from '../assets/images/youtube_B35lkeCBOsM_1920x1080_h264.mp4';
import { motion } from 'framer-motion';
import Slider from "react-slick";

const Main = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        {
            id: 1,
            text: 'Ребята, нам за неделю надо сделать проджект!',
            bgColor: 'bg-yellow-600',
            tailColor: 'border-t-yellow-600',
            avatar: four,
        },
        {
            id: 2,
            text: 'Давайте созвон',
            bgColor: 'bg-yellow-600',
            tailColor: 'border-t-yellow-600',
            avatar: four,
        },
        {
            id: 3,
            text: 'я сплю',
            bgColor: 'bg-red-900',
            tailColor: 'border-t-red-900',
            avatar: five,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Каждые 3 секунды смена сообщения

        // Очищаем интервал после завершения компонента
        return () => clearInterval(interval);
    }, []);

    // Настройки для карусели
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false, // Отключаем стрелки
    };

    return (
        <div className="flex flex-col items-center min-w-full">
            {/* Video Banner */}
            <div className="relative w-full max-h-[700px] mt-20 h-screen overflow-hidden">
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
            <div className="w-full bg-black p-6 justify-center pb-16 items-center">
                <div className="justify-self-start ml-28">
                    <h2 className="text-3xl font-bold text-white mb-12 font-poppins">Последние новости по разработке
                        игры</h2>
                    <div className="flex space-x-6">
                        {/* Здесь будут загружаться превью статей */}
                        <div className="bg-transparent shadow-md p-6 rounded w-96 h-[440px] overflow-y-auto "
                             style={{overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            <h3 className="text-xl font-semibold text-white mb-3">Понедельник.</h3>
                            <h5 className="text-xl font-semibold text-white mb-3">28.03.25</h5>
                            <p className="text-gray-400 pb-5">
                                Наша команда представила первую версию игры не показав саму игру.
                            </p>

                            {/* Контейнер с изображениями */}
                            <div className="space-y-4">
                                <img src={pr1} className="w-full h-3/6 object-cover"/>
                                <img src={pr3} className="w-full h-3/6 object-cover"/>
                            </div>
                        </div>
                        <div className="bg-transparent shadow-md p-6 rounded  w-96">
                            <h3 className="text-xl font-semibold text-white mb-3">Магия анимации: кривой сайт</h3>
                            <h5 className="text-xl font-semibold text-white mb-3">28.03.25</h5>
                            <p className="text-gray-400">
                                Вы не поверите, но я(самый полезный участик) решила внести свой вклад не только в
                                документацию и напоминание о дедлайне. Возможно. Сделать два блока на сайт? Да, это
                                достижение! В общем,
                                это первый шаблон моего костыльного ребенка, но он прадва будет лучше...Наверное. В
                                любом случае, когда игра будет готова она появится тут.
                            </p>
                        </div>

                        <div className="bg-transparent shadow-md p-6 rounded w-96">
                            <h3 className="text-xl font-semibold text-white mb-3">Первые главы? Это стало
                                реальностью!</h3>
                            <h5 className="text-xl font-semibold text-white mb-3">27.03.25</h5>
                            <p className="text-gray-400">
                                Дорогие игроки, да, мы сделали это! Первые главы игры готовы! Мы прошли через туман
                                многократных правок, пили кофе на протяжении всей ночи и, наконец, добились того, чтобы
                                эти главы не были просто пустыми экранами с текстом. Мечтайте о сюжете, переживайте за
                                героев, ведь именно они теперь могут совершать не только нелепые поступки, но и
                                некоторые… осмысленные. Да, в общем, мы довольны!
                            </p>
                        </div>

                        <div className="bg-transparent shadow-md p-6 rounded w-96 h-[440px] overflow-y-auto "
                             style={{overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            <h3 className="text-xl font-semibold text-white mb-3">Наконец-то сделали спрайты!</h3>
                            <h5 className="text-xl font-semibold text-white mb-3">24.03.25</h5>
                            <p className="text-gray-400 mb-4">
                                Мы это сделали! Да, спустя два месяца пустого ничегонеделанья и 20 споров по поводу
                                того, кто будет этим заниматься, спрайты все-таки созданы! Счастье? Да. Порой кажется,
                                что это настоящее искусство, а не просто мелкие пиксели. Но, эй, мы сделали это.
                                Пробежали
                                по всем стадиям — от "что это за чудище?" до "о, это же персонаж". Готовьтесь, скоро он
                                начнет говорить...
                                Выражаем благоданость за создание нашему единственному разрабу, хотя по факту в RenPy
                                зашел только Даниил Шарин, но о нем в следующий раз.
                                Пока представляем первые неудачные спрайты чтобы не было скучно
                            </p>

                            {/* Контейнер с изображениями */}
                            <div className="space-y-4">
                                <img src={first} className="w-full h-auto object-cover"/>
                                <img src={second} className="w-full h-auto object-cover"/>
                                <img src={third} className="w-full h-auto object-cover"/>
                            </div>
                        </div>

                        <div className="bg-transparent shadow-md p-6 rounded  w-96">
                            {/* Показываем только одну аватарку в зависимости от сообщения */}
                            <img
                                src={messages[messageIndex].avatar}
                                alt="User Avatar"
                                className="w-12 h-12 rounded-full object-cover mb-2"
                            />

                            {/* Сообщение с анимацией */}
                            <motion.div
                                className={`relative ${messages[messageIndex].bgColor} text-black p-4 rounded mt-4`}
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -100}}
                                transition={{duration: 1}}
                            >
                                {/* Текст сообщения с хвостиком */}
                                <div className="relative">
                                    <p className="text-white">{messages[messageIndex].text}</p>
                                </div>

                                {/* Хвостик */}
                                <div
                                    className={`absolute left-4 bottom-0 transform translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent ${messages[messageIndex].tailColor}`}
                                ></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black p-6">
                <h2 className="text-3xl font-bold text-white mb-10 font-poppins text-center">Концепт-арты</h2>
                {/* Grid контейнер для изображений */}
                <div className="grid px-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Изображения с анимацией при наведении */}
                    {[six, nine, ten,seven, eleven,eight, twelve, thir].map((img, index) => (
                        <div key={index} className="relative overflow-hidden group">
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80"
                            />
                            <div
                                className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
        ;
};

export default Main;

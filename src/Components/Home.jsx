import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({onCharacterChange}) => {


  const figures = [
 
  {
    src: '/img/natsu.png',
    name: 'Natsu Dragneel',
    descrip: 'Natsu is a Dragon Slayer wizard of the Fairy Tail guild, known for his fiery personality and kind heart.',
    color: 'text-rose-500',
    bg: '#fb7185'
  },
  {
    src: '/img/lucy.webp',
    name: 'Lucy Heartfilia',
    descrip: 'Lucy is a smart and kind Celestial Spirit Mage, and a loyal member of Fairy Tail.',
    color: 'text-yellow-400',
    bg: '#facc15'
  },
  {
    src: '/img/gray.webp',
    name: 'Gray Fullbuster',
    descrip: 'Gray is a powerful Ice Mage, calm by nature but often quarrels with Natsu.',
    color: 'text-blue-500',
    bg: '#3b82f6'
  },
  {
    src: '/img/erza.png',
    name: 'Erza Scarlet',
    descrip: 'Erza is an incredibly strong Requip Mage, known for her discipline and unwavering loyalty.',
    color: 'text-red-600',
    bg: '#dc2626'
  },
   {
    src: '/img/Makarov.webp',
    name: 'Makarov Dreyar',
    descrip: 'Makarov is the wise and powerful master of the Fairy Tail guild, known for his immense magic and caring nature towards his guild members.',
    color: 'text-green-600',
    bg: '#22c55e' 
  },
  {
  src: '/img/mirajane.png',
  name: 'Mirajane Strauss',
  descrip: 'Mirajane is an S-Class Mage with the powerful Satan Soul magic. Despite her gentle appearance, she is one of the strongest wizards in Fairy Tail.',
  color: 'text-purple-400',
  bg: '#c084fc' 
  },

];


  const [currentIndex, setCurrentIndex] = useState(0);
  const current = figures[currentIndex];

  
   useEffect(() => {
    if (onCharacterChange) {
      onCharacterChange(current.bg);
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white pt-20" id='home'>
      {/* Blob ánh sáng nền */}
      <motion.div
        key={current.name}
        className="absolute top-40% left-0 w-[450px] h-[450px] rounded-full filter blur-3xl opacity-80 mix-blend-screen animate-blob z-0"
        style={{ backgroundColor: current.bg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row justify-between items-center h-full px-6">
        {/* Ảnh nhân vật chính */}
        <div className="flex">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.name}
              className="h-[60vh]  lg:h-[80vh] object-contain"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Thông tin */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-5xl font-extrabold font-serif mb-4 tracking-wide md:text-6xl ${current.color}`}>
                {current.name}
              </h2>

              <p className="text-lg text-gray-200"
              style={{ fontFamily: "'Merriweather', serif"}}>{current.descrip}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails chọn nhân vật */}
        <div className="absolute bottom-10 m-2 lg:right-10 flex bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg z-20 overflow-x-auto max-w-[90vw] lg:max-w-[460px]">
          <div className="flex gap-4">
            {figures.map((figure, index) => (
              <img
                key={index}
                src={figure.src}
                alt={figure.name}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg cursor-pointer object-cover border-2 transition-all duration-300
                  ${index === currentIndex ? 'border-blue-500 scale-105' : 'border-transparent hover:border-gray-400'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;

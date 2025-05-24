import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const figures = [
    {
      src: '/img/natsu.png',
      name: 'Natsu Dragneel',
      descrip: 'Natsu là một Sát Long Nhân thuộc hội pháp sư Fairy Tail, nổi tiếng với tính cách nóng nảy và trái tim nhân hậu.',
      color: 'text-rose-500',
      bg: '#fb7185' // hồng đỏ
    },
    {
      src: '/img/lucy.webp',
      name: 'Lucy Heartfilia',
      descrip: 'Lucy là một pháp sư tinh linh thông minh, tốt bụng và là thành viên trung thành của Fairy Tail.',
      color: 'text-yellow-400',
      bg: '#facc15' // vàng
    },
    {
      src: '/img/gray.webp',
      name: 'Gray Fullbuster',
      descrip: 'Gray là một pháp sư băng mạnh mẽ, có tính cách điềm tĩnh nhưng hay cãi nhau với Natsu.',
      color: 'text-blue-500',
      bg: '#3b82f6'
    },
    {
      src: '/img/erza.png',
      name: 'Erza Scarlet',
      descrip: 'Erza là một pháp sư giáp chiến cực kỳ mạnh mẽ, nổi tiếng với tính kỷ luật và lòng trung thành.',
      color: 'text-red-600',
      bg: '#dc2626'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = figures[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Blob ánh sáng nền */}
      <motion.div
        key={current.name}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full filter blur-3xl opacity-80 mix-blend-screen animate-blob z-0"
        style={{ backgroundColor: current.bg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row justify-between items-center h-full px-6">
        {/* Ảnh nhân vật */}
        <div className="flex">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.name}
              className="h-[80vh] object-contain"
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
              <h2 className={`text-5xl font-bold mb-4 ${current.color}`}>{current.name}</h2>
              <p className="text-lg text-gray-200">{current.descrip}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails chọn nhân vật */}
        <div className="absolute bottom-10 right-10 flex gap-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-lg z-20">
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
    </section>
  );
};

export default Home;

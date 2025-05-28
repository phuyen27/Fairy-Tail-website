import React, { useEffect, useState } from 'react';

const ItemMovie = ({ color, movie, onBack, clickPos }) => {
  if (!movie) return null;

  // State quản lý animation (đang zoom)
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    // Bật hiệu ứng zoom sau khi mount component
    setTimeout(() => setZoomed(true), 10);
  }, []);

  // Tính transform-origin theo clickPos (viewport)
  // Chuyển clickPos thành % theo viewport width/height
  const originX = (clickPos.x / window.innerWidth) * 100;
  const originY = (clickPos.y / window.innerHeight) * 100;

  return (
    <section
      className="p-10 min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: 'black',
      }}
    >
      <button
        className="mb-6 px-4 py-2 bg-brown rounded hover:bg-brown-dark z-20 relative"
        onClick={onBack}
      >
        ← Back to Movies
      </button>

      {/* Background zoom animation */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${movie.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transformOrigin: `${originX}% ${originY}%`,
          transform: zoomed ? 'scale(1)' : 'scale(0.1)',
          transition: 'transform 0.5s ease-in-out',
          filter: 'brightness(0.6)',
          zIndex: 10,
        }}
      />

      {/* Nội dung */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          background: `linear-gradient(to bottom, ${color} -80%, black 100%)`,
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '800px',
          margin: '0 auto',
          marginTop: '3rem',
        }}
      >
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        <p className="text-xl mb-4">{movie.year}</p>
        <p className="text-lg max-w-3xl">{movie.description}</p>
      </div>
    </section>
  );
};

export default ItemMovie;

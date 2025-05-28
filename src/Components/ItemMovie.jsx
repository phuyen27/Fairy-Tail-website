import React, { useEffect, useRef, useState } from 'react';

const ItemMovie = ({ color, movie, onBack, clickPos }) => {
  if (!movie) return null;

  const [zoomed, setZoomed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setZoomed(true), 10);
  }, []);

  // Tính % transform-origin theo vị trí click
  const originX = (clickPos.x / window.innerWidth) * 100;
  const originY = (clickPos.y / window.innerHeight) * 100;

  const handleBack = () => {
    if (isExiting) return; // tránh nhấn nhiều lần
    setIsExiting(true);
    setZoomed(false);
    setTimeout(() => {
      onBack();
    }, 500); // đúng thời gian transition transform
  };

  return (
    <section
      className="p-10 min-h-screen text-white bg-black relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${color} -80%, black 100%)` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* LEFT: Info */}
        <div
          className="md:w-1/2 w-full"
          style={{
            zIndex: 20,
            padding: '2rem',
            borderRadius: '10px',
          }}
        >
          <button
            className="mb-6 px-4 py-2 bg-brown rounded hover:bg-brown-dark z-20 relative cursor-pointer"
            onClick={handleBack}
            disabled={isExiting}
          >
            ← Back to Movies
          </button>

          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-xl mb-4">{movie.year}</p>
          <p className="text-lg max-w-3xl">{movie.description}</p>
        </div>

        {/* RIGHT: Image */}
        <div
          className="md:w-1/2 w-full relative"
          style={{
            minHeight: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            ref={imageRef}
            src={movie.image}
            alt={movie.title}
            style={{
              borderRadius: '10px',
              transformOrigin: `${originX}% ${originY}%`,
              transform: zoomed ? 'scale(1)' : 'scale(0.1)',
              transition: 'transform 0.5s ease-in-out',
              zIndex: 10,
              objectFit: 'cover',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
            className="w-full max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ItemMovie;

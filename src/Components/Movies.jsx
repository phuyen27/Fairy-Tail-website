import React from 'react';

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}


const movies = [
  {
    title: 'Fairy Tail the Movie: Phoenix Priestess',
    year: 2012,
    image: '/img/movie1.jpg',
    description: 'Lucy and Natsu face a mysterious priestess and a deadly phoenix that threatens the world.',
  },
  {
    title: 'Fairy Tail: Dragon Cry',
    year: 2017,
    image: '/img/movie2.jpg',
    description: 'A powerful artifact called "Dragon Cry" falls into the wrong hands. Team Natsu must retrieve it before it’s too late.',
  },
  {
    title: 'Fairy Tail x Rave',
    year: 2013,
    image: '/img/movie3.jpg',
    description: 'A crossover between Fairy Tail and Rave Master, where Natsu and Haru team up to fight a common enemy.',
  },
  {
    title: 'Fairy Tail: The First Morning',
    year: 2013,
    image: '/img/movie4.webp',
    description: 'A special OVA showing the first morning after Fairy Tail rebuilds their guild.',
  },
  {
    title: 'Fairy Tail OVA: Memory Days',
    year: 2012,
    image: '/img/movie5.webp',
    description: 'Team Natsu is accidentally sent back in time, where they meet younger versions of themselves.',
  },
  {
    title: 'Fairy Tail OVA: Fairy Academy',
    year: 2011,
    image: '/img/movie6.webp',
    description: 'A parody OVA where characters are students at a modern-day academy. Full of humor and high school drama!',
  },
  {
    title: 'Fairy Tail OVA: The Exciting Ryuzetsu Land',
    year: 2013,
    image: '/img/movie7.jpg',
    description: 'A fun OVA where the guild enjoys their day at a water amusement park — until chaos inevitably breaks out.',
  }
];
const Movies = ({ color ,onSelectMovie }) => {
  return (
    <section
      className="p-10 min-h-screen text-white"
      id="movies"
      style={{
        background: `linear-gradient(to bottom, ${color} -80%, black 100%)`,
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">🎥 Fairy Tail Movies</h1>

        <div className="flex gap-4 justify-center overflow-hidden py-10 whitespace-nowrap">
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className="relative inline-block group transition-all duration-500"
            style={{
              width: '10%',
              height: '300px',
              backgroundImage: `url(${movie.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              border: '2px solid white',
              cursor: 'pointer',
              display: 'inline-block',
              transform: idx % 2 === 1 ? 'translateY(-20px)' : 'none',
              transition: 'all 0.5s ease-in-out',
            }}
           onClick={(e) => onSelectMovie(movie, e)}
            onMouseEnter={e => {
              e.currentTarget.style.width = '30%';
              e.currentTarget.style.border = '5px solid brown';
              const overlay = e.currentTarget.querySelector('.overlay');
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.width = '10%';
              e.currentTarget.style.border = '2px solid white';
              const overlay = e.currentTarget.querySelector('.overlay');
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <div
            className="overlay absolute inset-0 flex flex-col whitespace-pre-wrap items-center justify-center text-center px-2 transition-opacity duration-500"
              style={{
                opacity: 0,
                borderRadius: '5px',
                backgroundImage: `linear-gradient(to top, rgba(${hexToRgb(color)}, 0.85), rgba(0, 0, 0, 0.85))`,
              }}
            >
              <p className="text-white text-lg font-semibold">{movie.title}</p> 
              <p>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;

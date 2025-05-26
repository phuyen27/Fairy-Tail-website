import React from 'react';

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


const Movies = () => {
  return (
    <section className="p-10 min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">🎥 Fairy Tail Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {movies.map((movie, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.year}</p>
              <p className="mt-2 text-gray-300 text-sm">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;

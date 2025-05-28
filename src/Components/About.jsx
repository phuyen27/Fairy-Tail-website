import React from 'react';

const About = () => {
  return (
    <section
      className="text-white min-h-screen flex items-center justify-center p-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, black 100%), url('/img/about.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-4xl font-bold text-center">📜 About Fairy Tail</h2>
    </section>
  );
};

export default About;

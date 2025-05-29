import React from 'react';

const About = () => {
  return (
    <section
      className="text-white min-h-screen flex flex-col items-center justify-start p-10 "
      style={{
        fontFamily: "'Merriweather', serif",
        backgroundImage: `linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, black 100%), url('/img/about.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-3xl font-bold text-center my-10 font-serif"
      >About Fairy Tail</h2>
      <p className=" text-center text-lg leading-relaxed lg:text-left"
       >
        Fairy Tail is a popular Japanese manga and anime series created by Hiro Mashima. It follows the adventures of a magical guild 
        filled with diverse and powerful wizards who form strong bonds of friendship and overcome challenges together. The series is 
        known for its exciting battles, heartfelt moments, and themes of loyalty and courage.
      </p>
    </section>
  );
};

export default About;

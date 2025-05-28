import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'



const Author = ({ color }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ backgroundColor: color, transition: { duration: 1 } })
  }, [color])

  return (
    <section
      id="author"
      className="min-h-screen text-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      
      <motion.div
        initial={{ backgroundColor: 'black' }}
        animate={controls}
        className="absolute inset-0 -z-10"
        style={{
        background: `linear-gradient(to top, ${color} -80%, black 100%)`,
      }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-300 mb-6">About the Author</h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          <strong>Hiro Mashima</strong> is a renowned Japanese manga artist, best known as the creator of the
          popular series <em>Fairy Tail</em>. Born on May 3, 1977, in Nagano, Japan, Mashima made his debut in 1999 with
          <em> Rave Master</em>. His vibrant storytelling, memorable characters, and dynamic action scenes have earned him
          global recognition. <em>Fairy Tail</em>, serialized from 2006 to 2017, remains one of the most beloved shonen
          manga series worldwide.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="/img/author.webp"
            alt="Hiro Mashima"
            className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Author

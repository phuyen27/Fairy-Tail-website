import React from 'react'
import { motion } from 'framer-motion'

const Author = () => {
  return (
    <section id="author" className="min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
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
            src="/img/hiro-mashima.jpg"
            alt="Hiro Mashima"
            className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Author

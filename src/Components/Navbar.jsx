import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ color }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#author', label: 'Author' },
    { href: '#movies', label: 'Movies' },
    { href: '#contact', label: 'Contact' }
  ];

  const backgroundStyle = {
    background: 'transparent',
    backdropFilter: 'blur(10px)',
    boxShadow: `0 8px 24px ${color}66`,
    transition: 'box-shadow 0.5s ease',
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-between px-10 shadow-md z-50 backdrop-blur-md"
      style={backgroundStyle}
    >
      <img
        src="/img/logo.webp"
        alt="logo"
        className="h-10 cursor-pointer drop-shadow-[0_0_10px_white]"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white font-semibold relative py-5 transition-all duration-200 hover:text-shadow-md"
            onMouseEnter={(e) =>
              (e.currentTarget.style.textShadow = `0 0 8px ${color}`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl focus:outline-none"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-10 backdrop-blur-md flex flex-col items-center"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white font-semibold transition-all duration-200 py-5 relative"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textShadow = `0 0 8px ${color}`)
                }
                onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

import React from 'react';

const Navbar = ({color}) => {
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
    <div className=" fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-between px-10 shadow-md z-50 backdrop-blur-md"
    style = {backgroundStyle}>
    <img
      src="/img/logo.webp"
      alt="logo"
      className="h-10 cursor-pointer drop-shadow-[0_0_10px_white]"
    />

      <div className="flex gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white font-semibold hover:text-yellow-200 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

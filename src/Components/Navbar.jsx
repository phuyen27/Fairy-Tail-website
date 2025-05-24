import React from 'react';

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#author', label: 'Author' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="bg-rose-300/80 fixed top-0 left-0 right-0 w-full h-16 flex items-center justify-between px-10 shadow-md z-50 backdrop-blur-md">
<img src="/img/logo.webp" alt="logo" className="h-10 cursor-pointer" />

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

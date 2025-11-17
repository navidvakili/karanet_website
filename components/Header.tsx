import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#home', text: 'خانه' },
    { href: '#services', text: 'خدمات' },
    { href: '#about', text: 'درباره ما' },
    { href: '#ceo', text: 'مدیرعامل' },
    { href: '#contact', text: 'تماس با ما' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    // Allow default behavior for service detail pages
    if (href.startsWith('#services/')) {
        if (isMenuOpen) setIsMenuOpen(false);
        return;
    }

    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);

    const isHomePage = !window.location.hash.startsWith('#services/');
    
    if (isHomePage) {
        // We are on the homepage, so just scroll smoothly
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', href);
        } else if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, '', href);
        }
    } else {
        // We are on a detail page, navigate to the homepage section
        // Smooth scroll is not possible across pages, but navigation will be correct
        window.location.href = `/${href}`;
    }
  };


  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="text-2xl font-bold text-gray-800">
          کارانت<span className="text-red-600">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium">
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
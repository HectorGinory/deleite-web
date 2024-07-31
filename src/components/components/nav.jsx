import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Nav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navigationItems = [
    { name: t('home'), href: '#home' },
    { name: t('catalog'), href: '#catalog' },
    { name: t('contact'), href: '#contact' },
    { name: t('about_us'), href: '#about' },
  ];

  return (
    <nav className="md:bg-red-700 bg-white">
      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col items-center w-full">
        <div className="text-red-700 text-2xl font-bold w-full bg-whiteBone-200 flex items-center justify-center py-4 flex-col">
          <p className='font-light'>DELEITE CANARIO</p>
        </div>
        <ul className="flex gap-6 py-4">
          {navigationItems.map((item) => (
            <li key={item.name} className="text-whiteBone-200 hover:text-red-300">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
          <LanguageSelector />

        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="text-red-700 text-2xl font-light">
          DELEITE CANARIO
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-red-700 text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`p-4 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => setIsOpen(false)} className="text-red-700 text-3xl float-right">
          &times;
        </button>
        <ul className="clear-both mt-4 text-center">
          {navigationItems.map((item) => (
            <li key={item.name} className="text-red-700 hover:text-red-400 p-2">
              <a href={item.href} onClick={() => setIsOpen(false)}>{item.name}</a>
            </li>
          ))}
          <LanguageSelector />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

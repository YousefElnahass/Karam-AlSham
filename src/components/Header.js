import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-logo-dark-brown text-logo-white shadow-lg fixed w-full top-0 z-10">
      <nav className="container mx-auto px-10 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-6 space-x-reverse">
          <img src="https://play-lh.googleusercontent.com/0tlx54ouzj_BFMCuV6vaSaJbVhCLHHP6FiZuY_S3SBv8dJ2sZd7KcB9E8Wbi5UE81co4" alt="Karam El-Sham Logo" className="h-10 w-auto" /><br/>
          <Link to="/" className="text-2xl font-bold font-playfair">Karam Elsham</Link>
        </div>
        <ul className="flex items-start space-x-6 space-x-reverse">
          <li><Link to="/" className="hover:text-logo-light-yellow transition-colors duration-300"></Link></li>
          <li><Link to="/" className="hover:text-logo-light-yellow transition-colors duration-300">الرئيسية</Link></li>
          <li><Link to="/menu" className="hover:text-logo-light-yellow transition-colors duration-300">القائمة</Link></li>
          <li><Link to="/contact" className="hover:text-logo-light-yellow transition-colors duration-300">اتصل بنا</Link></li>
          <li><Link to="/about" className="hover:text-logo-light-yellow transition-colors duration-300">عن المطعم</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
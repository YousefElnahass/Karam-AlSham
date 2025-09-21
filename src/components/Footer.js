import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-logo-dark-brown text-logo-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="font-playfair">&copy; 2025 كرم الشام. جميع الحقوق محفوظة.</p>
        <div className="mt-2 flex justify-center space-x-4 space-x-reverse">
          <a href="#" className="hover:text-logo-light-yellow transition-colors duration-300"><i></i></a>
          <a href="#" className="hover:text-logo-light-yellow transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-logo-light-yellow transition-colors duration-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-logo-light-yellow transition-colors duration-300"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
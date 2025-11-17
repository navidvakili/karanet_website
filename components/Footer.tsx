
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>
          &copy; {currentYear} شرکت فناوری اطلاعات کارانت. تمام حقوق محفوظ است.
        </p>
        <p className="mt-2">
          <a href="http://karanet.info" className="hover:text-red-600 transition-colors duration-300">
            karanet.info
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

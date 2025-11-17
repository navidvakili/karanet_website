
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">آماده شروع پروژه جدیدتان هستید؟</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          با ما تماس بگیرید تا در مورد ایده‌های شما صحبت کنیم و ببینیم چگونه می‌توانیم به شما در رسیدن به اهدافتان کمک کنیم.
        </p>
        <div className="mt-10">
          <a
            href="http://karanet.info"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 border-2 border-transparent hover:border-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            با ما تماس بگیرید
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

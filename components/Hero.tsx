import React from 'react';

const Hero: React.FC = () => {

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', href);
    }
  };

  return (
    <section id="home" className="bg-gray-50">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          نوآوری در فناوری اطلاعات
          <br />
          <span className="text-red-600">راهکارهای هوشمند برای کسب و کار شما</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          ما در شرکت فناوری اطلاعات کارانت، با بهره‌گیری از آخرین دستاوردهای تکنولوژی، به کسب و کار شما کمک می‌کنیم تا در دنیای دیجیتال پیشرو باشید.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            onClick={handleCTAClick}
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            مشاوره رایگان
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
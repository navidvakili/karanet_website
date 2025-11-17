
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?grayscale" 
              alt="تیم کارانت" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">درباره شرکت کارانت</h2>
            <div className="mt-2 mb-6 h-1 w-24 bg-red-600 rounded"></div>
            <p className="text-gray-600 mb-4 leading-loose">
              شرکت فناوری اطلاعات کارانت با تکیه بر تیمی از متخصصان خلاق و با تجربه، متعهد به ارائه راهکارهای نوآورانه و کارآمد در حوزه فناوری اطلاعات است. ما معتقدیم که تکنولوژی باید در خدمت کسب و کارها باشد و به همین منظور، راهکارهایی را طراحی می‌کنیم که نه تنها چالش‌های فعلی شما را حل می‌کنند، بلکه زمینه‌ساز رشد و موفقیت آینده شما نیز خواهند بود.
            </p>
            <p className="text-gray-600 leading-loose">
              ماموریت ما، تبدیل شدن به شریک تکنولوژی قابل اعتماد شما و همراهی در مسیر تحول دیجیتال است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

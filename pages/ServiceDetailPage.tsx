import React from 'react';
import type { Service } from '../types';

interface ServiceDetailPageProps {
  service: Service;
}

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="h-80 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        
        {/* Description */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">شرح خدمات</h2>
          <div className="mt-2 mb-8 h-1 w-24 bg-red-600 mx-auto rounded"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-loose text-center">
            {service.longDescription}
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-20 bg-gray-50 py-16 rounded-lg">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">فرایند ما</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-red-600 mb-3">{step.title}</div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ویژگی‌های کلیدی</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckIcon />
                <span className="text-lg text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white py-16 rounded-lg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">آیا این سرویس برای شما مناسب است؟</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              برای دریافت مشاوره تخصصی و رایگان با کارشناسان ما تماس بگیرید.
            </p>
            <div className="mt-8">
              <a
                href="/#contact"
                className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 border-2 border-transparent hover:border-red-600 transition-all duration-300 transform hover:scale-105"
              >
                ارتباط با ما
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
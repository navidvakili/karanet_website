
import React from 'react';
import type { Service } from '../types';
import { servicesData } from '../data/services';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <a href={`#services/${service.id}`} className="block group">
      <div className="bg-white p-8 rounded-lg shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
        {service.icon}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </a>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">خدمات ما</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            ما مجموعه‌ای کامل از خدمات فناوری اطلاعات را برای پاسخگویی به نیازهای متنوع کسب و کار شما ارائه می‌دهیم.
          </p>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

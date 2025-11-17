
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import { servicesData } from './data/services';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll check for hash links
    if (window.location.hash && window.location.hash !== '#home') {
       window.scrollTo(0, 0);
    }


    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#services/')) {
      const serviceId = route.replace('#services/', '');
      const service = servicesData.find(s => s.id === serviceId);
      if (service) {
        return <ServiceDetailPage service={service} />;
      }
    }
    
    // Default to home page for any other hash or no hash
    return <HomePage />;
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductDisplay from './components/ProductDisplay';
import Herotry from './components/Herotry';
import OurServices from './components/OurServices';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Details from './components/Details';
import PreDetails from './components/PreDetails';
import TeamCarousel from './components/TeamCarousel';
import CarpentryDepartment from './components/CarpentryDepartment';
import ItemPage from './components/ItemPage';
import WhatsAppButton from './components/WhatsAppButton'; // Import WhatsAppButton

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const herotryRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const ourServicesRef = useRef(null);

  const handleProductClick = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    console.log(categoryId, categoryName);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onNavigate={scrollToSection}
        refs={{ herotryRef, aboutUsRef, contactUsRef }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section ref={herotryRef}>
                <Herotry language={language} />
              </section>
              <section ref={aboutUsRef}>
                <AboutUs language={language} />
              </section>
              <section ref={ourServicesRef}>
                <OurServices language={language} />
              </section>
              <section ref={contactUsRef}>
                <ContactUs language={language} />
              </section>
            </>
          }
        />
        <Route
          path="/products"
          element={
            <div className="app-layout">
              <Herotry />
              <ProductDisplay language={language} selectedCategory={selectedCategory} />
              <Sidebar onProductClick={handleProductClick} language={language} />
              <Details language={language} />
            </div>
          }
        />
        <Route
          path="/carpentry-department"
          element={
            <>
              <CarpentryDepartment language={language} />
              <PreDetails language={language} />
            </>
          }
        />
        <Route path="/item/:itemId" element={<ItemPage language={language} />} />
      </Routes>
      <Footer />
      <WhatsAppButton phoneNumber="+966546419235" message="Hi, I want to know more about your services!" />
    </Router>
  );
}

export default App;

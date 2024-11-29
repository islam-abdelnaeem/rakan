import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurServices.css';

const services = [
  {
    title: { en: 'Carpentry Department', ar: "قسم النجارة " },
    description: { en: 'Manufacturing and installing all types of custom woodwork, including cabinetry, furniture, and decorative carpentry, using both modern and traditional techniques.',
      ar: 'تصنيع وتركيب جميع أنواع الأعمال الخشبية المخصصة، بما في ذلك الخزائن والأثاث والأعمال الخشبية الزخرفية، باستخدام التقنيات الحديثة والتقليدية.' 
     },
    imageUrl: '/src/assets/images/ex1.jpg',
    path: '/carpentry-department', // Define route path for each service
  },
  {
    title: { en: 'Veneer Department', ar: 'القسم القشرة' },
    description: {
      en: 'Cladding all types of natural and artificial veneers for all wood types, thermal and manual pressing, and marquetry work.',
      ar: 'تلبيس كافة انواع القشرة الطبيعيه والصناعيه لجميع الاخشاب والكبس الحراري واليدوي واعمال الماركتري'
    },
    imageUrl: '/src/assets/images/ex2.jpg',
    path: '/products',
  },
  {
    title: { en: 'Our Work Department', ar: 'قسم العمال السابقة' },
    description: { en: 'Showcasing our previous carpentry work, which includes custom furniture design and installation, cabinetry, and decorative woodwork, using the best materials and techniques.',
       ar: ' عرض أعمالنا السابقة في مجال النجارة، والتي تشمل تصميم وتركيب الأثاث المخصص، الخزائن، والأعمال الخشبية الزخرفية، باستخدام أفضل المواد والتقنيات.' 
      },
    imageUrl: '/src/assets/images/ex3.jpg',
    path: '/carpentry-department',
  },
];

const OurServices = ({ language = 'en' }) => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="our-services">
      <h2>{language === 'en' ? 'Our Services' : 'خدماتنا'}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card-container" onClick={() => handleCardClick(service.path)}>
            <div className="service-card" style={{ backgroundImage: `url(${service.imageUrl})` }}>
              <div className="card-overlay">
                {service.description[language] && <p>{service.description[language]}</p>}
              </div>
            </div>
            <h3 className="service-title">{service.title[language]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

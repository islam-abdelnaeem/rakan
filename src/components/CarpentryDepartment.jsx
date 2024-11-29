import React, { useEffect, useState } from 'react';
import PreDetails from './PreDetails';
import Herotry from './Herotry';
import Slider from './Slider';

const base_url = 'https://arkan.up.railway.app/';
const CarpentryDepartment = ({ language }) => {
  const [sliderData, setSliderData] = useState([]);

  // Fetch data from the main API endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}api/PreviousWorks`);
        const data = await response.json();

        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          imageUrl: item.imagesUrls[0], // Use the first image as a thumbnail
        }));

        setSliderData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Herotry title="Carpentry Department" subtitle="Explore our carpentry services" />
      <Slider data={sliderData} language={language} />
      {/* WhatsApp Contact Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href="https://wa.me/+966546419235" // Replace YOUR_PHONE_NUMBER with your actual number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#25D366',
            borderRadius: '5px',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Contact with WhatsApp
        </a>
      </div>
      <preDetails  language={language} />
    </div>
  );
};

export default CarpentryDepartment;

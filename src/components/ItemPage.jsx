import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Herotry from './Herotry';
import './ItemPage.css';

const baseurl = 'https://arkan.up.railway.app/';

const ItemPage = ({ language }) => {
  const navigate = useNavigate();
  const { itemId } = useParams(); // Retrieve item ID from URL parameters
  const [item, setItem] = useState(null); // Initialize state for the item
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  // Redirect if no itemId is provided
  useEffect(() => {
    if (!itemId) {
      console.warn('No item ID provided. Redirecting...');
      navigate('/carpentry-department');
    }
  }, [itemId, navigate]);

  // Fetch detailed item data using the itemId and language
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseurl}api/PreviousWorks/${itemId}`,
          {
            headers: {
              'Content-Type': 'application/json', // Set content type if needed
              'Accept-Language': language, // Custom language header
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch item data.');
        }

        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
        navigate('/carpentry-department'); // Redirect if fetching fails
      }
    };

    if (itemId) {
      fetchData();
    }
  }, [itemId, language, navigate]);

  // Handle image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (item?.imagesUrls?.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.imagesUrls.length);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [item?.imagesUrls]);

  // Handle cases where item is not available
  if (!item) {
    return null;
  }

  return (
    <div className="item-page">
  
      <div className="content-wrapper">
        <div className="text-content">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
               {/* WhatsApp Contact Button below everything */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER" // Replace YOUR_PHONE_NUMBER with your actual number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 25px',
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
        </div>
        {item.imagesUrls && item.imagesUrls.length > 0 ? (
          <div className="slider-container">
            <div
              className="slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {item.imagesUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Item ${index + 1}`}
                  className="item-image"
                />
              ))}
            </div>
            
          </div>
        ) : (
          <p>No images available.</p>
        )}
      </div>
 
    </div>
  );
};

export default ItemPage;

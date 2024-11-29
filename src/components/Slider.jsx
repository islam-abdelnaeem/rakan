import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const CustomSlider = ({ language }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const base_url = 'https://arkan.up.railway.app/';

  // Fetch data from the API endpoint when the component mounts or when language changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}api/PreviousWorks`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': language, // Include language header
          },
        });
        const result = await response.json();

        // Format the data to ensure it's in the right structure
        const formattedData = result.map((item) => ({
          id: item.id,
          name: item.name,
          imageUrl: item.imagesUrls && item.imagesUrls.length > 0 ? item.imagesUrls[0] : null, // Get the first image or null
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [language]); // Add language as a dependency

  // Handle card click and navigate to ItemPage
  const handleCardClick = (item) => {
    navigate(`/item/${item.id}`, { state: item }); // Pass the item as state
    console.log('Navigating with item:', item);
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Our Work</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="slider-item"
            onClick={() => handleCardClick(item)}
          >
            <div className="card">
              {/* Check if an image URL is available */}
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="card-image"
                />
              ) : (
                <div className="no-image-placeholder">
                  <p>No Image Available</p>
                </div>
              )}
              <div className="card-title-overlay">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;

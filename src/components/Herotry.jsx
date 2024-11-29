import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <>
      <style>
        {`
          /* Reset body and html margins and padding */
          body, html {
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }
          
          /* Media queries for responsive height adjustments */
          .carousel-item-fullscreen {
            height: 100vh;
            width: 100vw;
          }

          @media (max-width: 768px) {
            .carousel-item-fullscreen {
              height: 70vh;
            }
            .hero-title {
              font-size: 2rem;
            }
            .hero-subtitle {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <header style={{ paddingLeft: 0 }}>
        <Carousel fade controls={false} indicators={false} interval={1200} >
          {[1, 2, 3, 4, 5].map((index) => (
            <Carousel.Item key={index}>
              <div
                className='carousel-item-fullscreen p-5 text-center bg-image'
                style={{
                  backgroundImage: `url('/src/assets/images/ex${index}.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                <div
                  className='mask'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white' style={{ textAlign: 'center' }}>
                      <h1 className='hero-title mb-3'>Arkan</h1>
                      <h4 className='hero-subtitle mb-3'>for latest standards Quality</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </header>
    </>
  );
}

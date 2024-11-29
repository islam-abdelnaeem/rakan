import React, { useEffect, useState } from 'react';
import { Card, Button, Col, Row, Modal } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function ProductDisplay({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const baseurl = 'https://arkan.up.railway.app/';

  useEffect(() => {

    if (selectedCategory) {
      setLoading(true);
      const encodedCategory = encodeURIComponent(selectedCategory);
      fetch(`${baseurl}api/products?categoryId=${encodedCategory}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data || []); // Ensure products is an array
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <>
      <Row
        className="g-4"
        style={{
          width: '70%',
          marginTop: window.innerWidth <= 576 ? '25%' : '10%', // 25% for mobile, 10% for larger screens
          alignSelf: 'center',
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map(product => (
            <Col xs={12} sm={6} md={4} lg={4} key={product.id}>
              <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
                <Card.Img
                  variant="top"
                  src={`${product.pictureUrl}` || 'default-image.jpg'}
                  alt={product.name || 'Product Image'}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageClick(product.pictureUrl)}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: '600', color: '#333' }}>
                    {product.name || 'Unnamed Product'}
                  </Card.Title>
                  <Button
                    variant="success"
                    className="mt-3"
                    href={`https://wa.me/+966546419235?text=Hello! I'm interested in learning more about ${product.name}`}
                    target="+966546419235"
                  >
                    Contact on WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Modal for enlarged image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-0">
          <img
            src={currentImage}
            alt="Enlarged"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductDisplay;

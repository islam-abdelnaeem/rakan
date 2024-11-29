import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from './../assets/images/logo.svg';
import './Header.css';

function Header({ language = 'en', onLanguageToggle, onNavigate, refs }) {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const location = useLocation();

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact Us',
      toggleLang: 'عربى',
      'veneers-department': 'veneers Department',
      'carpentry-department': 'Carpentry Department',
    },
    ar: {
      home: 'الصفحة الرئيسية',
      about: 'حول',
      products: 'المنتجات',
      contact: 'اتصل بنا',
      toggleLang: 'English',
      'Veneers-Department': 'قسم القشرة',
      'carpentry-department': 'قسم النجارة',
    },
  };

  // Handle scroll state for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const isItemPage = location.pathname.startsWith('/item/');
      if (isItemPage) {
        setScrolling(true);
      } else {
        setScrolling(
          window.scrollY > 50 &&
          !window.matchMedia('(max-width:768px)').matches
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Track device type (mobile or tablet)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const handleMediaQueryChange = () => setIsMobileOrTablet(mediaQuery.matches);

    // Set initial state and listen for changes
    handleMediaQueryChange();
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const currentTranslations = translations[language] || translations['en'];

  // Determine if the current page is an item page
  const isItemPage = location.pathname.startsWith('/item/');

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={`shadow-sm w-100 d-flex align-items-center ${scrolling ? 'navbar-scrolled' : 'navbar-top'}`}
    >
      <Container style={{ width: '80%', height: '5rem' }}>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top rounded-circle" />
          {!isMobileOrTablet && (
            <span
              className={`ms-2 fw-bold ${scrolling || isItemPage ? 'text-blue' : 'text-white'}`}
              style={{ fontSize: '1.5rem' }}
            >
              Arkan
            </span>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: 'white' }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => onNavigate(refs.herotryRef)}
              className={`mx-2 ${scrolling || isItemPage ? 'text-blue' : 'text-white'}`}
              style={{ fontSize: '1.5rem' }}
            >
              {currentTranslations.home}
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate(refs.aboutUsRef)}
              className={`mx-2 ${scrolling || isItemPage ? 'text-blue' : 'text-white'}`}
              style={{ fontSize: '1.5rem' }}
            >
              {currentTranslations.about}
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: scrolling || isItemPage ? 'blue' : 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                {currentTranslations.products || 'More'}
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown">
                <Dropdown.Item as={Link} to="/products">
                  {currentTranslations['Veneers-Department'] || 'Veneers-department'}
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/carpentry-department">
                  {currentTranslations['carpentry-department'] || 'Carpentry Department'}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link
              onClick={() => onNavigate(refs.contactUsRef)}
              className={`mx-2 ${scrolling || isItemPage ? 'text-blue' : 'text-white'}`}
              style={{ fontSize: '1.5rem' }}
            >
              {currentTranslations.contact}
            </Nav.Link>
            <Button onClick={onLanguageToggle} className="ms-3" style={{ fontSize: '1.5rem' }}>
              {currentTranslations.toggleLang}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

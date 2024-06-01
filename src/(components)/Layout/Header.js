import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"

function Header() {
  let [nav, setNav] = useState(false);
  const changeValueOnSroll = () => {
    const scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  }
  window.addEventListener("scroll", changeValueOnSroll)
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
              <img src={Logo} className='img-fluid' alt='Logo' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/ourmenu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className='cart fs-5'>
                  <i className='bi bi-bag'></i>
                  <em className='roundpoint'>2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
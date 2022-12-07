import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
// import navIcon2 from "../assets/img/nav-icon2.svg"
// import navIcon3 from "../assets/img/nav-icon3.svg"


export const NavBar = () => {

    const [ativeLink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            window.addEventListener("scroll", onScroll)

            return () => window.addEventListener("scroll", onScroll)
        }

    })

    const onUpdateActiveLink = (v) => {
        setActivelink(v);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo-resize' src={logo} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={ativeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ativeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ativeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='#'><img src={navIcon1} alt=""></img></a>
                            </div>
                            <button className="vvd" onCick={() => console.log('connect')}>
                                <span>Let's Connect</span>
                            </button>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
import { useEffect, useState } from 'react';
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"

export const NavBar = () => {

    const [activeLink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (v) => {
        setActivelink(v);
    }

    return (
        <nav className={scrolled ? "scrolled" : "not-scrolled"}>
            <div>
                <a href="#home">
                    <img className='logo-resize' src={logo} alt="logo"></img>
                </a>
                <div className='navbar-toggle-icon'></div>
                <div>
                    <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home </a>
                    <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                    <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                    <a className='social-icon' href='https://github.com/Outlain'><img src={navIcon1} alt=""></img></a>
                    <a className='button' href='#connect'>
                        <button className="vvd">
                            <span>Let's Connect</span>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    )
}
import React from 'react';
import { Logo, Menu, Hamburger } from '../../atom';

const Navbar = ({klikMenu, klikHamburger}) => {
    return (
        <nav id="navbar">
            <div className="con_nav">
                <Logo target="navbar" onklik={klikMenu} />
                <div className="menu">
                    <Menu href="#about" target="about" kelas="amenu menuAbout" nama="About" onklik={klikMenu} />
                    <Menu href="#service" target="service" kelas="amenu menuService" nama="Services" onklik={klikMenu} />
                    <Menu href="#skill" target="skill" kelas="amenu menuSkill" nama="Skills" onklik={klikMenu} />
                    <Menu href="#project" target="project" kelas="amenu menuProject" nama="Projects" onklik={klikMenu} />
                    <Menu href="#contact" target="contact" kelas="amenu menuContact" nama="Contact" onklik={klikMenu} />
                </div>
                <Hamburger onklik={klikHamburger} />
            </div>
        </nav>
    )
}

export default Navbar;
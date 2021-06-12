import React from 'react';
import { Menu } from '../../atom';

const Drawer = ({klikMenu}) => {
    return (
        <div id="drawer" className='drawer'>
            <Menu href="#about" target="about" kelas="amenu menuAbout" nama="About" onklik={klikMenu} />
            <Menu href="#service" target="service" kelas="amenu menuService" nama="Services" onklik={klikMenu} />
            <Menu href="#skill" target="skill" kelas="amenu menuSkill" nama="Skills" onklik={klikMenu} />
            <Menu href="#project" target="project" kelas="amenu menuProject" nama="Projects" onklik={klikMenu} />
            <Menu href="#contact" target="contact" kelas="amenu menuContact" nama="Contact" onklik={klikMenu} />
        </div>
    )
}

export default Drawer;
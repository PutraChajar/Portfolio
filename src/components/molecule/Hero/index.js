import React from 'react';
import { ptr, ptr2, behance, github, linkedin } from '../../../assets';
import { Button, ButtonImage, Circle, Cross, Rectangle, Triangle, Zigzag } from '../../atom';

const Hero = ({klikProgrammer, klikDesigner, hoverProgrammer, hoverDesigner, klikCV}) => {
    return (
        <div className="hero" id="hero">
            <div className="con_hero">
                <div className="hero_text">
                    <div className="hello">Hello, I'm</div>
                    <div className="name">Putra Ibnu Chajar</div>
                    <div className="profession">
                        <span className="underlined" onClick={klikProgrammer} onMouseOver={hoverProgrammer}>Programmer</span>
                        <span className="x">X</span>
                        <span className="underlined" onClick={klikDesigner} onMouseOver={hoverDesigner}>UI Designer</span>
                    </div>
                    <Button kelas="btn cv" nama="Download CV" klik={klikCV} />
                    <Rectangle kelas="geo rect1" />
                    <Circle kelas="geo circ1" />
                </div>
                <div className="hero_image">
                    <Button kelas="btn cv_mb" nama="Download CV" klik={klikCV} />
                    <div className="hero_foto">
                        <div className="foto">
                            <img src={ptr} alt="foto1" className="foto_programmer" id="foto_programmer" />
                            <img src={ptr2} alt="foto2" className="foto_designer" id="foto_designer" />
                        </div>
                        <div className="sosmed">
                            <ButtonImage vclass="btn outline round image" vimage={linkedin} valt="linkedin" vhref="https://www.linkedin.com/in/putrachajar/" />
                            <ButtonImage vclass="btn outline round image" vimage={github} valt="github" vhref="https://github.com/putrachajar" />
                            <ButtonImage vclass="btn outline round image" vimage={behance} valt="behance" vhref="https://www.behance.net/putrachajar" />
                        </div>
                    </div>
                    <Triangle kelas="geo tria1" />
                    <Cross kelas="geo cross1" />
                    <Zigzag kelas="geo zig1" />
                    <Zigzag kelas="geo zig2" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
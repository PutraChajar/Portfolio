import React from 'react';
import { up } from '../../../assets';

const Footer = ({onklik}) => {
    return (
        <div className="footer" id="footer">
            <div className="con_footer">
                <div className="footer_line"></div>
                <div className="footer_up" onClick={onklik}>
                    <img src={up} alt="up" />
                </div>
                <div className="footer_copyright">
                    <a href="https://putrachajar.com/">© 2021 Putra Ibnu Chajar</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
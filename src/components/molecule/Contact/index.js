import React from 'react';
import { cowork } from '../../../assets';
import { Button, Title } from '../../atom';

const Contact = ({klikTitle, klikHire}) => {
    return (
        <div className="contact" id="contact">
            <div className="con_contact">
                <Title nama="Contact" target="contact" onklik={klikTitle} />
                <div className="lay_contact">
                    <div className="ill_contact">
                        <img src={cowork} alt="Co Workers" />
                    </div>
                    <div className="caps_contact">
                        <p className="caps">Have a project or want to work together?</p>
                        <Button kelas="btn" nama="Hire me" klik={klikHire} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
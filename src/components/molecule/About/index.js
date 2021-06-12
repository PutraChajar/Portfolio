import React, { useEffect, useState } from 'react';
import { CONFIG } from '../../../config';
import { Title, AboutItem } from '../../atom';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

const About = ({klikTitle}) => {
    const [dataAbout, setDataAbout] = useState([]);

    useEffect(() => {
        axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/about`)
        .then(result => {
            const responseAPI = result.data;
            setDataAbout(responseAPI.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="about" id="about">
            <div className="con_about">
                <Title nama="About Me" target="about" onklik={klikTitle} />
                <div className="about_list">
                    {dataAbout.map(about => {
                        return (
                            <LazyLoad key={about._id} once={true} >
                                <AboutItem once={true} value={about.title} caption={about.caption} />
                            </LazyLoad>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;
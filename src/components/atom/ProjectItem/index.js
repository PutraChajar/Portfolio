import React, { useEffect, useState } from 'react';
import { CONFIG } from '../../../config';
import { ButtonImage } from '../../atom';
import { rectangle } from '../../../assets';
import ImagePlaceholder from '../ImagePlaceholder';

const Project_item = ({src_image, alt_image, title, subtitle, links}) => {
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        setLoaded(false);
    }, []);

    return (
        <div className="project_data_item">
            <div className="project_data_mockup" style={loaded ? {} : {padding: '20px', boxSizing: 'border-box'}}>
                { loaded ? null : <ImagePlaceholder src_image={rectangle} alt_image={alt_image} width_image="100" height_image="100" /> }
                <img src={src_image} alt={alt_image} style={loaded ? {} : {display: 'none'}} onLoad={() => setLoaded(true)} />
            </div>
            <div className="project_data_desc">
                <div className="project_data_text">
                    <p className="project_data_title">{title}</p>
                    <p className="project_data_subtitle">{subtitle}</p>
                </div>
                <div className="project_data_button">
                    {links.map(link => {
                        return <ButtonImage key={link._id} vclass="btn outline round image" vimage={`${CONFIG.BASE_URL_API + link.logo}`} valt={link.name} vhref={link.link} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project_item;
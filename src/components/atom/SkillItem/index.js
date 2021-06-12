import React, { useEffect, useState } from 'react';
import { triangle } from '../../../assets';
import ImagePlaceholder from '../ImagePlaceholder';

const Skill_item = ({src_image, alt_image, title}) => {
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        setLoaded(false);
    }, []);

    return (
        <div className="skill_item">
            <div className="skill_image">
                { loaded ? null : <ImagePlaceholder src_image={triangle} alt_image={alt_image} width_image="100" height_image="100" /> }
                <img src={src_image} alt={alt_image} style={loaded ? {} : {display: 'none'}} onLoad={() => setLoaded(true)} />
            </div>
            <div className="skill_title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Skill_item;
import React, { useEffect, useState } from 'react';
import { rectangle } from '../../../assets';
import ImagePlaceholder from '../ImagePlaceholder';

const Service_item = ({src_image, alt_image, width_image, height_image, title, desc}) => {
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        setLoaded(false);
    }, []);

    return (
        <div className="service_card">
            <div className="service_image">
                { loaded ? null : <ImagePlaceholder src_image={rectangle} alt_image={alt_image} width_image="100" height_image="100" /> }
                <img src={src_image} alt={alt_image} width={width_image} height={height_image} style={loaded ? {} : {display: 'none'}} onLoad={() => setLoaded(true)} />
            </div>
            <div className="service_title">
                {title}
            </div>
            <div className="service_desc">
                {desc}
            </div>
        </div>
    )
}

export default Service_item;
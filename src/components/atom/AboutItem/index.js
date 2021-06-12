import React from 'react';

const About_item = ({value, caption}) => {
    return (
        <div className="about_item">
            <div className="hexagon">
                <div className="hexagon1"></div>
                <div className="hexagon2">{value}</div>
                <div className="hexagon3"></div>
            </div>
            <div className="caption_item">
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default About_item;
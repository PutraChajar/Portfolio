import React from 'react';

const ImagePlaceholder = ({src_image, alt_image, width_image, height_image}) => {
    return (
        <img src={src_image} alt={alt_image} width={width_image} height={height_image} />
    )
}

export default ImagePlaceholder;
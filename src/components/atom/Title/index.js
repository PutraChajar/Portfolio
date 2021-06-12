import React from 'react';

const Title = ({nama, target, onklik}) => {
    return (
        <span className="title underlined" target={target} onClick={onklik}>{nama}</span>
    )
}

export default Title;
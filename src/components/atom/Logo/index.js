import React from 'react';
import { pLogo1, pLogo2 } from '../../../assets';

const Logo = ({target, onklik}) => {
    return (
        <img src={pLogo1} alt="logo" id="plogo" target={target} onClick={onklik}></img>
    )
}

export default Logo;
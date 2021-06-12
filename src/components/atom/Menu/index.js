import React from 'react';

const Menu = ({href, target, kelas, idName, nama, onklik}) => {
    return (
        <a href={href} target={target} className={kelas} id={idName} onClick={onklik}>{nama}</a>
    )
}

export default Menu;
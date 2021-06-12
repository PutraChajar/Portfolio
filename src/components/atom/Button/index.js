import React from 'react';

const Button = ({nama, kelas, klik}) => {
    return (
        <button className={kelas} onClick={klik}>{nama}</button>
    )
}

export default Button;
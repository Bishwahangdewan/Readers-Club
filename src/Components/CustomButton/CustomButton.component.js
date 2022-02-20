import React from 'react';


const CustomButton = ({ children, bgcolor, px, py, radius, color, ml }) => {

    const customButtonStyles = {
        backgroundColor: `#${bgcolor}`,
        paddingTop: py ? `${py}px` : '',
        paddingBottom: py ? `${py}px` : '',
        paddingLeft: px ? `${px}px` : '',
        paddingRight: px ? `${px}px` : '',
        borderRadius: `${radius}px`,
        color: color,
        marginLeft: ml ? `${ml}px` : ''
    }

    return (
        <button style={customButtonStyles}>{children}</button>
    )
}

export default CustomButton;
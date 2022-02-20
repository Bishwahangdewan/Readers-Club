import React from 'react';

const FormInput = ({ type, height, width, mt, ml, radius, outline, pl, placeholder }) => {

    const inputClass = {
        height: `${height}px`,
        width: `${width}px`,
        marginTop: mt ? `${mt}px` : '',
        marginLeft: ml ? `${ml}px` : '',
        borderRadius: radius ? `${radius}px` : '',
        outline: outline,
        paddingLeft: pl ? `${pl}px` : "",
    }

    return (
        <input type={type} placeholder={placeholder} style={inputClass} />
    )
}

export default FormInput;
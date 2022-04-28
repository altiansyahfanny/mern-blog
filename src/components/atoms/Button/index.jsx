import React from 'react'

const Button = ({ text, ...rest }) => {
    return (
        <button className='bg-blue-700 px-3 py-1 rounded text-white w-full' {...rest}>
            {text}
        </button>
    )
}

export default Button
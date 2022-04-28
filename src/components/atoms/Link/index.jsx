import React from 'react'

const Link = ({ title, onClick }) => {
    return (
        <p onClick={onClick} className='text-sm text-gray-600 text-center underline cursor-pointer'>{title}</p>
    )
}

export default Link
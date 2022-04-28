import React from 'react'

const Upload = ({ img, ...rest }) => {
    return (
        <div>
            <img src={img} alt="" className='w-80' />
            <input
                type="file"
                {...rest}
                className='mt-2' />
        </div>
    )
}

export default Upload
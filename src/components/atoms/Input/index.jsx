import React from 'react'

const Input = ({ label, error, ...rest }) => {
    return (
        <>
            <label className={`block text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
                {label}
            </label>
            <input {...rest} className={`mt-1 border ${error ? 'border-red-500' : 'border-gray-300'} px-3 py-1 rounded outline-none w-full`} />
            {
                error && (
                    <div className='text-red-500'>{error}</div>
                )
            }
        </>
    )
}

export default Input
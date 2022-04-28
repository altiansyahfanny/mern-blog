import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        window.localStorage.removeItem('token');
        navigate('auth/login')
    }
    return (
        <div className='flex items-center justify-between bg-emerald-700 px-5 py-5 text-white'>
            <div className=''>MERN BLOG</div>
            <div onClick={logout} className='cursor-pointer'>Logout</div>
        </div>
    )
}

export default Header
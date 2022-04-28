import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
    const token = window.localStorage.getItem('token');

    return !token ? (
        <Outlet />
    ) : (
        <Navigate to={'/'} />
    )
}

export default AuthRoute
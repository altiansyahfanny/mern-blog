import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CreateBlog, DetailBlog, Home, Login, Register } from '../../pages';
import store from '../redux/store';
import { AuthRoute, ProtectedRoute } from '../../components';
const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProtectedRoute />} >
                        <Route exact path='/' element={<Home />} />
                        <Route path='/create-blog/:id' element={<CreateBlog />} />
                        <Route path='/create-blog' element={<CreateBlog />} />
                        <Route path='/detail-blog/:id' element={<DetailBlog />} />
                    </Route>
                    <Route path='auth' element={<AuthRoute />} >
                        <Route path='/auth/login' element={<Login />} />
                        <Route path='/auth/register' element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Router
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogItem } from '../../components';
import { getBlogs } from '../../config/action';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import MainApp from '../MainApp';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1);
    const { dataBlog, page } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs(counter))
    }, [dispatch, counter])

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    }

    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this post.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                            .then(res => {
                                console.log('Delete Success : ', res)
                                dispatch(getBlogs(counter))
                            })
                            .catch(err => console.log(err))
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    }



    return (
        <MainApp>
            <div>
                <div className='bg-emerald-600 inline-block px-5 py-2 text-white rounded-lg cursor-pointer' onClick={() => navigate('/create-blog')}>Tambah</div>
            </div>
            <div className='flex flex-wrap gap-4 mt-4'>
                {dataBlog.map((blog, index) => (
                    <BlogItem key={blog._id} blog={blog} confirmDelete={confirmDelete} />
                ))}
            </div>
            <div className='flex items-center justify-center gap-4 mt-8'>
                <button className='bg-emerald-600 px-5 py-2 rounded text-white' onClick={() => previous()}>Prev</button>
                <p>{page.currentPage} / {page.totalPage}</p>
                <button className='bg-emerald-600 px-5 py-2 rounded text-white' onClick={() => next()}>Next</button>
            </div>
        </MainApp>
    )
}

export default Home
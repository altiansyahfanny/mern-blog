import React, { useEffect, useState } from 'react'
import MainApp from '../MainApp'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailBlog = () => {
    const params = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [params.id])

    return (
        <MainApp>
            {
                data && (
                    <div>
                        <div className='text-center'>
                            <Link to={'/'} className='underline'>Kembali</Link>
                        </div>
                        <div className='w-full bg-orange-200'>
                            <img src={`http://localhost:4000/${data.image}`} alt="" className='object-cover h-96 w-full' />
                        </div>
                        <div className='text-2xl font-semibold mt-2'>{data.title}</div>
                        <div className='text-gray-600'>{data.body}</div>
                        <div className='flex gap-2 items-center'>
                            <div className='text-sm'>{data.author.name}</div>
                            -
                            <div className='text-sm'>{data.createdAt}</div>
                        </div>
                    </div>
                )
            }
        </MainApp>

    )

}

export default DetailBlog
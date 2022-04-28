import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BlogItem = (props) => {
    const navigate = useNavigate();

    const { image, title, body, author, _id } = props.blog;
    const { confirmDelete } = props


    return (
        <div>
            <div className='border w-[380px] rounded-lg shadow-md overflow-hidden'>
                <img src={`http://localhost:4000/${image}`} alt="" className='object-cover w-full h-32' />
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-lg'>{title}</h1>
                        <div className='flex items-center gap-2'>
                            <p className='text-blue-500 cursor-pointer' onClick={() => navigate(`create-blog/${_id}`)}>Edit</p>
                            |
                            <p className='text-red-500 cursor-pointer' onClick={() => confirmDelete(_id)}>Hapus</p>
                        </div>
                    </div>
                    <h5 className='text-gray-500'>Author : {author.name}</h5>
                    <p>{body}</p>

                    <div className='bg-yellow-500 px-3 py-1 rounded text-white text-center mt-2 cursor-pointer' onClick={() => navigate(`/detail-blog/${_id}`)}>
                        View Detail
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Input, Upload } from '../../components';
import { postToAPI, setForm, setImagePrev, updateToAPI } from '../../config/action';
import MainApp from '../MainApp';

const CreateBlog = () => {
    const [isUpdate, setIsUpdate] = useState(false);
    const { form, imagePrev } = useSelector(state => state.blogReducer);
    const { errors } = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    const params = useParams()

    useEffect(() => {
        if (params.id) {
            setIsUpdate(true);

            axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
                .then(res => {
                    const data = res.data.data;
                    dispatch(setForm('title', data.title))
                    dispatch(setForm('body', data.body))
                    dispatch(setImagePrev(`http://localhost:4000/${data.image}`));
                })
                .catch(err => console.log(err));
        }
    }, [params.id, dispatch])


    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image', file));
        dispatch(setImagePrev(URL.createObjectURL(file)));
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        // if (isUpdate) {
        //     dispatch(updateToAPI(form, params.id))
        // } else {
        //     dispatch(postToAPI(form))
        // }
    }
    return (
        <MainApp>
            <div className='text-center'>
                <Link to={'/'} className='underline'>Kembali</Link>
            </div>
            <h1 className='text-2xl font-semibold'>{isUpdate ? 'Update Post' : 'Create New Post'}</h1>
            <form action="" onSubmit={onSubmit}>
                <div className='mt-2'>
                    <Input
                        label={'Post Title'}
                        value={form.title}
                        onChange={(e) => dispatch(setForm('title', e.target.value))}
                    />
                </div>
                <div className='mt-2'>
                    <Upload
                        img={imagePrev}
                        onChange={(e) => onImageUpload(e)}
                    />
                </div>
                <div className='mt-2'>
                    <Input
                        label={'Post Body'}
                        value={form.body}
                        onChange={(e) => dispatch(setForm('body', e.target.value))}
                    />
                </div>
                <button type='submit' className='px-5 py-2 bg-emerald-600 rounded text-white mt-2'>{isUpdate ? 'Update' : 'Simpan'}</button>
            </form>
        </MainApp>
    )
}

// export default MainApp(CreateBlog, 'Create Blog')
export default CreateBlog;
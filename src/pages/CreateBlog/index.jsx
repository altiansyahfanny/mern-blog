import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import MainApp from '../MainApp';
import { Input, Upload } from '../../components';
import { useDispatch } from 'react-redux';
import { postToAPI, updateToAPI } from '../../config/action';
import * as Yup from 'yup'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imagePrev, setImagePrev] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setIsUpdate(true);

            axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
                .then(res => {
                    const data = res.data.data;
                    formik.values.title = data.title;
                    formik.values.body = data.body;
                    // setImage(data.image);
                    // setImagePrev(`http://localhost:4000/${data.image}`);
                })
                .catch(err => console.log(err));
        }
    }, [params.id, dispatch])

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3, 'Title harus lebih dari 3 huruf').max(50, 'Title tidak boleh lebih dari 3 huruf').required('Title tidak boleh kosong'),
        body: Yup.string().required('Body tidak boleh kosong'),
    })
    const onSubmit = (data) => {
        if (isUpdate) {
            dispatch(updateToAPI(data, image, params.id))
        } else {
            dispatch(postToAPI(data, image))
        }
    }
    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePrev(URL.createObjectURL(file))
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });
    return (
        <MainApp>
            <form onSubmit={formik.handleSubmit}>
                <div className='mt-2'>
                    <Input
                        label="Title"
                        error={formik.errors.title}
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
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
                        label="Body"
                        error={formik.errors.body}
                        id="body"
                        name="body"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.body}
                    />
                </div>
                <button type='submit' className='px-5 py-2 bg-emerald-600 rounded text-white mt-2'>{isUpdate ? 'Update' : 'Simpan'}</button>
            </form>
        </MainApp>
    );
};

export default Index
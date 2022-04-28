import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

const formikAndYup = () => {
    const initialValues = {
        title: '',
        body: '',
        image: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3, 'Title harus lebih dari 3 huruf').max(5).required(),
        body: Yup.string().required()
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='flex items-center justify-center p-5'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='border border-blue-500 p-5 rounded inline-block mx-auto'>
                    <div>
                        <div htmlFor="title">Title</div>
                        <Field
                            className="mt-1 border border-gray-300 px-3 py-1 rounded outline-none w-full"
                            autoComplete="off"
                            id="title"
                            name="title"
                            placeholder="Title"
                        />
                        <ErrorMessage name='title' component='span' className='first-letter:uppercase text-red-500' />
                    </div>
                    <div className='mt-2'>
                        <div htmlFor="body">Body</div>
                        <Field
                            className="mt-1 border border-gray-300 px-3 py-1 rounded outline-none w-full"
                            autoComplete="off"
                            id="body"
                            name="body"
                            placeholder="Body"
                        />
                        <ErrorMessage name='body' component='span' className='first-letter:uppercase text-red-500' />
                    </div>
                    <div className='mt-2'>
                        <button type='submit' className='bg-blue-500 text-white px-3 py-1 rounded'>Create Blog</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default formikAndYup
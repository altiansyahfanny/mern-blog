import * as api from '../api';

export const setForm = (formType, formValue) => {
    return { type: 'SET_FORM_DATA', formType, formValue }
}

export const resetForm = () => {
    return { type: 'RESET_FORM_DATA' }
}

export const setImagePrev = (payload) => {
    return { type: 'SET_IMAGE_PREV', payload }
}

export const postToAPI = (form, image) => async (dispatch) => {

    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', image);
    // data.append('image', form.image);

    try {
        const respons = await api.createBlog(data)
        console.log('Create Success : ', respons)
        dispatch({ type: 'RESET_FORM_DATA' })
    } catch (error) {
        alert(error.response.data.data)
        dispatch({ type: 'SET_FORM_ERROR', payload: error.response.data.data })
    }

}

export const updateToAPI = (form, image, id) => async (dispatch) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', image);

    try {
        const respons = await api.updateBlogPost(data, id)
        console.log('Update success : ', respons)
        dispatch({ type: 'RESET_FORM_DATA' })
    } catch (error) {
        console.log(error)
        alert(error.response.data.data)
    }
}

export const deleteToAPI = async (id) => {
    console.log(id)
    // try {
    //     const respons = await api.deleteBlogPost(id)
    //     console.log('Delete success : ', respons)
    // } catch (error) {
    //     console.log(error)
    // }
}
import * as api from '../api';

// Action Creators
export const getBlogs = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs(page);
        dispatch({ type: 'UPDATE_DATA_BLOG', payload: data.data });
        dispatch({
            type: 'UPDATE_PAGE',
            payload: {
                currentPage: data.current_page,
                totalPage: Math.ceil(data.total_data / data.per_page)
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}
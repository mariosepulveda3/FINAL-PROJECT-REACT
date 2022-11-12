import { API } from "../../shared/services/api";


export const newUser = async (formdata, navigate, dispatch) => {
    dispatch({type: 'register_user_start' });
    try {
        const res = await API.post('/users/postNewUser', formdata);
        dispatch({type: 'register_user_ok'});
        console.log(res);
        navigate('/login')
    } catch (error) {
        dispatch({type: 'register_user_error'})
    }
} 
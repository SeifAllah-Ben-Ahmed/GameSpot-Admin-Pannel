import axios from 'axios';
import { toast } from 'react-toastify';
import { pending, login, rejected } from './userSlice';

axios.defaults.withCredentials = true;
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(pending());
  try {
    const res = await axios.post('http://localhost:5000/api/users/login', user);
    dispatch(login(res.data));
    navigate('/');
  } catch (error) {
    toast.error(error.response.data.message, {
      type: error.response.data.status === 'fail' ? 'warning' : 'error',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    dispatch(rejected(error.response.data));
  }
};
export const currentUser = async (dispatch) => {
  dispatch(pending());
  try {
    const res = await axios.get('http://localhost:5000/api/users/me');
    dispatch(login(res.data));
  } catch (error) {
    dispatch(rejected(error.response.data));
    toast.error(error.response?.data?.message, {
      type: error.response?.data?.status === 'fail' ? 'warning' : 'error',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

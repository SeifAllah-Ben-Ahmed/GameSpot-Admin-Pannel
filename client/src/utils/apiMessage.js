import { toast } from 'react-toastify';

export const rejectedMessage = (status, message) => {
  return toast[status === 'fail' ? 'warn' : 'error'](message, {
    position: 'top-right',
    autoClose: 5000,
  });
};

export const resolvedMessage = (message) => {
  return toast(message, {
    position: 'top-right',
    autoClose: 5000,
  });
};
export const toastMessage = (status, message) => {
  return toast[
    status === 'fail' ? 'warn' : status === 'success' ? 'success' : 'error'
  ](message, {
    position: 'top-right',
    autoClose: 5000,
  });
};

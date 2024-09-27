import { toast, ToastOptions, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastingProps {
  type: 'default' | 'success' | 'error' | 'warning';
  txt: string;
}

function toasting({ type = 'default', txt = '' }: ToastingProps) {
  const toastOption: ToastOptions = {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
    transition: Slide,
  };

  if (type === 'default') {
    toast(txt, toastOption);
  } else {
    toast[type](txt, toastOption);
  }
}

export default toasting;

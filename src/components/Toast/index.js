import React from 'react';
import toast from 'react-hot-toast';
import { theme } from '../../shared/theme';

const Toast = ({
  isPromise,
  thePromise,
  successMsg,
  errorMsg,
  //   toastType,
  //   toastMsg,
}) => {
  const styles = {
    background: (theme) => theme.colors.secundaryDark,
    color: (theme) => theme.colors.primaryLight,
    borderRadius: '0.9rem',
    position: 'bottom-center',
  };

  //   if (isPromise) {
  return toast.promise(
    { thePromise },
    {
      loading: 'Carregando...',
      success: successMsg ? successMsg : 'Feito!',
      error: errorMsg ? errorMsg : 'Algo deu errado :(',
    },
    { styles }
  );
  //   }

  //   return { toastMsg }, styles;
};

export default Toast;

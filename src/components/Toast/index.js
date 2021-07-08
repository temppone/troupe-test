import React from 'react';
import Button from '../Button';
import toast, { Toaster } from 'react-hot-toast';

const Toast = () => {
  toast('Hello World', {
    duration: 4000,
    position: 'bottom-center',
    // Styling
    style: {},
    className: '',
    // Custom Icon
    icon: '👏',
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  return (
    <div>
      <Button buttonName="add toast" onClick={toast}></Button>
      <Toaster />
    </div>
  );
};

export default Toast;

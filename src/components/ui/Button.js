// src/components/ui/Button.js
import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`px-4 py-2 font-bold rounded-lg ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;

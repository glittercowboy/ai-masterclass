// src/components/ui/Card.js
import React from 'react';

const Card = ({ children, ...props }) => {
  return (
    <div {...props} className={`p-4 rounded-lg shadow-md ${props.className}`}>
      {children}
    </div>
  );
};

export default Card;

import React from 'react';

const FormLayout = ({ children, title }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
};

export default FormLayout;

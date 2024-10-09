import React from 'react';

const Button = ({ text, onClick, type = 'button', color = 'blue' }) => {

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    // Agrega más colores según sea necesario
  };


  const selectedColorClass = colorClasses[color] || colorClasses.blue;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${selectedColorClass} text-white px-4 py-2 rounded`}
    >
      {text}
    </button>
  );
};

export default Button;

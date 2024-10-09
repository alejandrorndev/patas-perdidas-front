import React from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded w-full p-2"
      />
    </div>
  );
};

export default Input;

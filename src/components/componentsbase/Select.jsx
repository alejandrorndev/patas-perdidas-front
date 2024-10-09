import React from 'react';

const Select = ({ label, name, value, options, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full px-3 py-2 border rounded">
        <option value="" label="Selecciona una opción" />
        {options.map(option => (
          <option key={option.value} value={option.value} label={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

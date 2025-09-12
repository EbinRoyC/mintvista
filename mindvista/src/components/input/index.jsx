import React from 'react'
import Label from '../label'

const Input = ({ value, type, label, maxLength, onChange, name }) => {
  return (
    <div className="flex flex-col gap-1">
      <Label label={label} />
      <input
        name={name}
        value={value}
        maxLength={maxLength || 20}
        type={type || 'text'}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-2xl border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 shadow-sm"
      />
    </div>
  );
};

export default Input;

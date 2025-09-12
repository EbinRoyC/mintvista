import React from 'react'
import Label from '../label'

const Select = ({ className = "", option = [], label, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-1">
      <Label label={label} />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} w-full px-4 py-2 rounded-2xl border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-blue-500 shadow-sm`}
      >
        <option value="">-- Select --</option>
        {option.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

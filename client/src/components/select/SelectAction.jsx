import React from 'react'

// создаём селектор "Действие"
const SelectAction = ({options, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="" disabled>Действие</option>

      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}

export default SelectAction
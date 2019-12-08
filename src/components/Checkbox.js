import React from 'react';

export function Checkbox(props) {
  return (
    <label className="container">{props.label}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  )
}
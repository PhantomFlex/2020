import React, { useState } from 'react';

export function Checkbox(props) {
  const [checked, setChecked] = useState(props.checked);

  const checkboxClicked = () => {
    setChecked(!checked); 
  }

  return (
    <label className="container">{props.label}
      <input type="checkbox" onChange={checkboxClicked} checked={checked} />
      <span className="checkmark"></span>
    </label>
  )
}
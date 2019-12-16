import React, { useState } from 'react';
import './checkbox.css'; 

export function Checkbox(props) {
  const [checked, setChecked] = useState(props.checked);

  const checkboxClicked = () => {
    props.checkBoxClickedCallBack(props.index); 
  }

  return (
    <label className="container">{props.label}
      <input type="checkbox" onChange={checkboxClicked} checked={checked} />
      <span className="checkmark"></span>
    </label>
  )
}
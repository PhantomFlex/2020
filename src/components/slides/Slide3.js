import React, { useState } from 'react';

export function Slide3(props) {
  let initialValue = ""; 
  if (props.data.step3) {
    initialValue = props.data.step3; 
  }
  
  const [value, setValue] = useState(initialValue);
  
  function onChange(e) {
    setValue(e.target.value);
    props.dataCallback("step3", e.target.value);
  }

  return (
    <div>
      <h1>fa</h1>
      <input onChange={onChange} value={value} />
    </div>
  )
}
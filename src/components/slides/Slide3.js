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
      <h1>Размер,который Вы обычно носите:</h1>
      <h2>Введите в любом удобном виде:</h2>
      <input onChange={onChange} value={value} />
    </div>
  )
}
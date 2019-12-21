import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Slide3(props) {
  const dispatch = useDispatch();
  
  function onChange(e) {
  }

  return (
    <div>
      <h1>Размер,который Вы обычно носите:</h1>
      <p>Введите в любом удобном виде:</p>
      <input onChange={onChange} value="" />
    </div>
  )
}
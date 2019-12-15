import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveValue } from './../../redux/actions/input';

export function Slide3(props) {
  const inputValue = useSelector(state => state.inputReducer.value);
  const dispatch = useDispatch();
  
  function onChange(e) {
    dispatch(saveValue(e.target.value))
  }

  return (
    <div>
      <h1>Размер,который Вы обычно носите:</h1>
      <p>Введите в любом удобном виде:</p>
      <input onChange={onChange} value={inputValue} />
    </div>
  )
}
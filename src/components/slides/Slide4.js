import React,{ useState } from 'react';

export function Slide4(props) {
    let initialValue = ""; 
  if (props.data.step4) {
    initialValue = props.data.step4; 
  }
  
  const [value, setValue] = useState(initialValue);
  
  function onChange(e) {
    setValue(e.target.value);
    props.dataCallback("step4", e.target.value);
  }
  return(
    <div>
    <h1>Мерка 1 - Длина</h1>
    <h2>На лист бумаги поставьте стопу и перенесите на нее вес тела. Поставьте коробок спичек вплотную к самому длинному пальцу. Не отрывая пятку от пола поднимите пальцы вверх, отметьте ручкой место соприкосновения пальцев с коробком. То же самое повторите с пяткой. Измерьте расстояние между точками.</h2>
    <input onChange={onChange} value={value} />
  </div>
  )
}
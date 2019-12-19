import React, { useState } from 'react';
import { Doubleinput } from '../Doubleinput';


export function Slide4(props) {
  let initialValue = "";

  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h1>Мерка 1 - Длина</h1>
      <p>На лист бумаги поставьте стопу и перенесите на нее вес тела. Поставьте коробок спичек вплотную к самому длинному пальцу. Не отрывая пятку от пола поднимите пальцы вверх, отметьте ручкой место соприкосновения пальцев с коробком. То же самое повторите с пяткой. Измерьте расстояние между точками.</p>
      <iframe className='video' src='https://youtu.be/8TRAeznuMqg'/>
      <Doubleinput/>
    </div>
  )
}
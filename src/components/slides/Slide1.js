import React from 'react';
import { Checkbox } from './../Checkbox';
import './../../css/Slaide1.css';

export class Slide1 extends React.Component {
  constructor() {
    super();

    this.state = {
      checkboxs: [{ label: "Лист А4", checked: false }, { label: "Ручка или Карандаш", checked: false }, { label: "Мягкий метр или линейка", checked: false }, { label: "Два любых небольших предмета", checked: false },{ label: "Стелька из обуви,в которой Вам удобно(необязательно)", checked: false },{ label: "Я в носках, в которых буду ходить в обуви", checked: false }]
    }
  }

  render() {
    const { checkboxs } = this.state;
    return (
      <div>
        {checkboxs.map((checkbox, index) => {
          return <Checkbox label={checkbox.label} index={index} checked={checkbox.checked} />
        })}
      </div>
    )
  }
}

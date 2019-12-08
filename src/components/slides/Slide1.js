import React from 'react';
import { Checkbox } from './../Checkbox';
import './../../css/Slaide1.css';

export class Slide1 extends React.Component {
  constructor() {
    super();

    this.state = {
      checkboxs: [{ label: "рулетка", checked: false }, { label: "рулетка", checked: false }, { label: "шпатель", checked: false }, { label: "винил", checked: false }]
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

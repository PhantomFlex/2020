import React from 'react';
import { Checkbox } from './../Checkbox';
import { ButtonContainer } from './../ButtonContainer/ButtonContainer';
import { useSelector, useDispatch, connect } from 'react-redux';
import { updateStepData, setChecked } from './../../redux/actions/steps';


const checboxLabels = [
  "Лист А4", "Ручка или Карандаш",
  "Мягкий метр или линейка", "Два любых небольших предмета",
  "Стелька из обуви,в которой Вам удобно (необязательно)",
  "Я в носках, в которых буду ходить в обуви"
];

class Slide1 extends React.Component {
  constructor() {
    super();
  }

  checkBoxClicked = checkboxIndex => {
    const { stepData, dispatch, checked } = this.props;
    //stepData.checboxValues = stepData.checboxValues.map((value, index) => index === checkboxIndex ? !value : value); 
    //dispatch(updateStepData(1, new Object(stepData)));
    dispatch(setChecked(!checked));
  }

  shouldComponentUpdate() {

  }

  render() {
    const { stepData, prevStep, nextStep, checked } = this.props;

    let countChecked = 0;
    stepData.checboxValues.forEach(checkbox => {
      countChecked = checkbox ? ++countChecked : countChecked;
    });
    const disabledNextButton = countChecked === 6 ? false : true;
    return (
      <React.Fragment>
        <div>
          <h1>Приготовбтесь</h1>
          {checboxLabels.map((label, index) => {
            //const checked = stepData ? stepData.checboxValues[index] : false;
            return <Checkbox label={label} key={index} checked={checked} index={index} checkBoxClickedCallBack={this.checkBoxClicked} />
          })}
        </div>
        <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={disabledNextButton} />
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  stepData: state.steps.stepsData.filter(el => el.stepNumber === 1)[0],
  checked: state.steps.checkbox
});

export default connect(mapStateToProps)(Slide1);
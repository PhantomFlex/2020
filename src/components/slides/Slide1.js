import React from 'react';
import { Checkbox } from './../Checkbox';
import { ButtonContainer } from './../ButtonContainer/ButtonContainer';
import { useSelector, useDispatch } from 'react-redux';
import { updateStepData, addStepInitialData } from './../../redux/actions/steps';

const checboxLabels = [
  "Лист А4", "Ручка или Карандаш",
  "Мягкий метр или линейка", "Два любых небольших предмета",
  "Стелька из обуви,в которой Вам удобно (необязательно)",
  "Я в носках, в которых буду ходить в обуви"
];

export const Slide1 = ({prevStep, nextStep}) => {
  const dispatch = useDispatch();
  const stepData = useSelector(state => {
    return state.steps.stepsData.filter(el => el.stepNumber === 1)[0];
  });
  const checkBoxClicked = checkboxIndex => {
    stepData.checboxValues[checkboxIndex] = !stepData.checboxValues[checkboxIndex];
    dispatch(updateStepData(1, stepData));
  }
  const disabelNextButton = !stepData.checboxValues.every(el => el);   
  return (
    <React.Fragment>
      <div>
        {checboxLabels.map((label, index) => {
          const checked = stepData ? stepData.checboxValues[index] : false;
          return <Checkbox label={label} key={index} checked={checked} index={index} checkBoxClickedCallBack={checkBoxClicked} />
        })}
      </div>
      <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={disabelNextButton}/>
    </React.Fragment>
  );
}

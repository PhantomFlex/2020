import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateStepData } from "../../redux/actions/actions";
import { Checkbox } from './../Checkbox';
import { ButtonContainer } from './../ButtonContainer/ButtonContainer';

const checkboxLabels = [
  "Лист А4", "Ручка или Карандаш",
  "Мягкий метр или линейка", "Два любых небольших предмета",
  "Стелька из обуви,в которой Вам удобно (необязательно)",
  "Я в носках, в которых буду ходить в обуви"
];

const STEP_NUMBER = 1;
export const Slide1 = ({nextStep, prevStep}) =>  {
    const stepData = useSelector(state => state.stepsData.filter(stepData => stepData.stepNumber === STEP_NUMBER)[0]);
    const dispatch = useDispatch();

    const checkBoxClicked = checkBoxIndex => {
        const checkboxes = [...stepData.checkBoxValues];
        checkboxes[checkBoxIndex] = !checkboxes[checkBoxIndex];
        dispatch(updateStepData(STEP_NUMBER, {...stepData, checkBoxValues: checkboxes}));
    };

    const disableNextButton = !stepData.checkBoxValues.every(value => value);

    return (
      <React.Fragment>
        <div>
          <h1>Приготовьтесь</h1>
          {checkboxLabels.map((label, index) => (
             <Checkbox label={label}
                             key={index}
                             checked={stepData.checkBoxValues[index]}
                             index={index}
                             checkBoxClickedCallBack={checkBoxClicked}
            />
          ))}
        </div>
        <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={disableNextButton} />
      </React.Fragment>
    );
};



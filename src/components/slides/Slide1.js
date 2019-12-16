import React, { useEffect } from 'react';
import { Checkbox } from './../Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { updateStepData, addStepInitialData } from './../../redux/actions/steps';

const checboxLabels = [
  "Лист А4", "Ручка или Карандаш",
  "Мягкий метр или линейка", "Два любых небольших предмета",
  "Стелька из обуви,в которой Вам удобно (необязательно)",
  "Я в носках, в которых буду ходить в обуви"
];

export const Slide1 = (props) => {
  const dispatch = useDispatch();
  const stepData = useSelector(state => {
    return state.steps.stepsData[1];
  });

  const checkBoxClicked = checkboxIndex => {
    stepData.checboxValues[checkboxIndex] = !stepData.checboxValues[checkboxIndex];
    dispatch(updateStepData(1, stepData));
  }

  useEffect(() => {
    dispatch(addStepInitialData(1, { checboxValues: [false, false, false, false, false, false] }))
  }, [dispatch]);

  return (
    <div>
      {checboxLabels.map((label, index) => {
        const checked = stepData ? stepData.checboxValues[index] : false;
        return <Checkbox label={label} key={index} checke={checked} index={index} checkBoxClickedCallBack={checkBoxClicked} />
      })}
    </div>
  );
}

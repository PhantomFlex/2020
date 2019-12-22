import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {updateStepData} from "../../redux/actions/actions";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";

const STEP_NUMBER = 2;
export const UsualSizeSlide = ({nextStep, prevStep}) => {
    const stepData = useSelector(state => state.stepsData.filter(stepData => stepData.stepNumber === STEP_NUMBER)[0]);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const newStepData = {...stepData};
        newStepData.inputValue = e.target.value;
        dispatch(updateStepData(STEP_NUMBER, newStepData));
    };

    return (
        <div>
            <h1>Размер,который Вы обычно носите:</h1>
            <p>Введите в любом удобном виде:</p>
            <input onChange={onChange} value={stepData.inputValue}/>
            <ButtonContainer prevStep={prevStep} nextStep={nextStep} showNextButton={true} disableNextButton={false}/>
        </div>
    )
};

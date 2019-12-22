import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {updateStepData} from "../../redux/actions/actions";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";

export const MeasureSlide = ({prevStep, nextStep, title, text, url, stepNumber}) => {
    const stepData = useSelector(state=> state.stepsData.filter(stepData => stepData.stepNumber === stepNumber)[0]);
    const dispatch = useDispatch();
    const onChangeFirstInput = (e) => {
        const newStepData = {...stepData};
        newStepData.firstInputValue = e.target.value;
        dispatch(updateStepData(stepNumber, newStepData));
    };
    const onChangeSecondInput = (e) => {
        const newStepData = {...stepData};
        newStepData.secondInputValue = e.target.value;
        dispatch(updateStepData(stepNumber, newStepData))
    };

    return (
        <React.Fragment>
            <h1>{title}</h1>
            <p className="measureText">{text}</p>
            <iframe title="title" className='video' src={url}/>
            <p>Левая</p>
            <input className='inputFix' value={stepData.firstInputValue} onChange={onChangeFirstInput}/>
            <p>Правая</p>
            <input className='inputFix' value={stepData.secondInputValue} onChange={onChangeSecondInput}/>
            <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={false} showNextButton={true}/>
        </React.Fragment>
    )
};

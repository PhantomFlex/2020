import React from 'react';
import {useDispatch} from "react-redux";
import {updateStepData} from "../../redux/actions/actions";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";
import {Button} from "../Button";

export const QuestionSlide = ({nextStep, prevStep, stepNumber, questionText, finalStep}) => {
    const dispatch = useDispatch();
    return (
        <div>

            <h1>{questionText}</h1>
            <Button isNext={true} onClick={() => {
                dispatch(updateStepData(stepNumber, {stepNumber, answer: true}));
                nextStep();
            }}>Да</Button>
            <Button isNext={true} onClick={() => {
                dispatch(updateStepData(stepNumber, {stepNumber, answer: false}));
                finalStep();
            }}>Нет</Button>
            <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={false} showNextButton={false}/>
        </div>
    )
};

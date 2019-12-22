import React from 'react';
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";

export const QuestionSlide = ({nextStep, prevStep, stepNumber, questionText}) => {
    return(
        <div>
            <h1>{questionText}</h1>

            <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={false} showNextButton={false}/>
        </div>
    )
};

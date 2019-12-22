import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {updateStepData} from "../../redux/actions/actions";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";

export const MeasureSlide = ({prevStep, nextStep, title, text, url, stepNumber, isFourInputs}) => {
    const stepData = useSelector(state => state.stepsData.filter(stepData => stepData.stepNumber === stepNumber)[0]);
    const dispatch = useDispatch();

    const onChange = (e) => {
        const newStepData = {...stepData};
        newStepData[e.target.id] = e.target.value;
        dispatch(updateStepData(stepNumber, newStepData));
    };

    const showNextButton = () => {
        if (stepData.inputNumber1 === "" || stepData.inputNumber2 === "") {
            return false;
        } else if (isFourInputs) {
            if (stepData.inputNumber3 === ""|| stepData.inputNumber3 === "" ) {
                return false;
            }
        }
        return true;
    };
    return (
        <React.Fragment>
            <h1>{title}</h1>
            <p className="measureText">{text}</p>
            <iframe title="title" className='video' src={url}/>
            <p>Левая окруж:</p>
            <input  id="inputNumber1" className='inputFix' value={stepData.inputNumber1} onChange={onChange}/>
            <p>Левая от пола:</p>
            <input id="inputNumber2" className='inputFix' value={stepData.inputNumber2} onChange={onChange}/>
            {isFourInputs && (
                <React.Fragment>
                    <p>Правая окруж</p>
                    <input id="inputNumber3" className='inputFix' value={stepData.inputNumber3} onChange={onChange}/>
                    <p>Правая от пола: </p>
                    <input id="inputNumber4" className='inputFix' value={stepData.inputNumber4} onChange={onChange}/>

                </React.Fragment>
            )}

            <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={false} showNextButton={showNextButton()}/>
        </React.Fragment>
    )
};

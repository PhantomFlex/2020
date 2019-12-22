import React from 'react';
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";

export const MeasureSlide = ({prevStep, nextStep, title, text, url}) => {
    return (
        <React.Fragment>
            <h1>{title}</h1>
            <p>{text}</p>
            <iframe title="title" className='video' src={url}/>
            <p>Левая</p>
            <input className='inputFix'/>
            <p>Правая</p>
            <input className='inputFix'/>
            <ButtonContainer prevStep={prevStep} nextStep={nextStep} disableNextButton={false}/>
        </React.Fragment>
    )
};

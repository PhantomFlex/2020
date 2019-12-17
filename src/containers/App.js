import React from 'react';
import './App.css';
import { StepsController } from './StepsController';
import { useDispatch, useSelector } from 'react-redux';
import { addStepData, updateStepData } from '../redux/actions/steps';


export const App = () => {
    const step = useSelector(state => state.steps.currentStepNumber);
    const maxStep = useSelector(state => state.steps.maxSteps); 

    return (
        <div className="App">
            <img className="logo" src="images/Logo.png"/>
            <StepsController step={step} maxStep={maxStep} />
        </div>
    );
}

/**
 * TODO:
 * Refactor all slides to React class components, use connect
 */


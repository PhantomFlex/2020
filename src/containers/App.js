import React from 'react';
import './App.css';
import { StepsController } from './StepsController';
import { useDispatch, connect } from 'react-redux';
import { addStepData, updateStepData } from '../redux/actions/steps';


const App = ({step, maxStep}) => {

    return (
        <div className="App">
            <img className="logo" src="images/Logo.png"/>
            <StepsController step={step} maxStep={maxStep} />
        </div>
    );
}

const mapStateToProps = state => ({
    step: state.steps.currentStepNumber,
    maxStep: state.steps.maxSteps
})

export default connect(mapStateToProps)(App); 

/**
 * TODO:
 * Refactor all slides to React class components, use connect
 */


import { INCREASE_STEP_BY, DECREASE_STEP_BY, ADD_STEP_DATA, UPDATE_STEP_DATA, ADD_STEP_INITIAL_DATA } from '../actions/steps';

const initialState = {
    currentStepNumber: 0,
    maxSteps: 12,
    stepsData: [{
        stepNumber: 1,
        checboxValues: [false, false, false, false, false, false]
    }]
};

export const stepReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_STEP_BY: {
            return {
                maxSteps: state.maxSteps,
                stepsData: state.stepsData,
                currentStepNumber: state.currentStepNumber + action.increaseBy
            }
        }
        case DECREASE_STEP_BY: {
            return {
                stepsData: state.stepsData,
                maxSteps: state.maxSteps,
                currentStepNumber: state.currentStepNumber - action.decreaseBy
            }
        }
        case UPDATE_STEP_DATA: {
            const newData = action.stepData; 
            const newStepsData = state.stepsData.map(el => {
                if (el.stepNumber === action.stepNumber) {
                    return newData; 
                }
                return el; 
            }); 
            
            return {
                maxSteps: state.maxSteps, 
                currentStepNumber: state.currentStepNumber,
                stepsData: newStepsData
            }
        }
        default:
            return state;
    }
}
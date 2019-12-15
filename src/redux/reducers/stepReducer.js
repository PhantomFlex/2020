import { INCREASE_STEP_BY, DECREASE_STEP_BY, ADD_STEP_DATA, UPDATE_STEP_DATA } from '../actions/steps';

const initialState = {
    currentStepNumber: 0,
    maxSteps: 12,
    stepsData: []
};

export const stepReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_STEP_BY: {
            return {
                ...state,
                currentStepNumber: state.currentStepNumber + action.increaseBy
            }
        }
        case DECREASE_STEP_BY: {
            return {
                ...state,
                currentStepNumber: state.currentStepNumber - action.decreaseBy
            }
        }
        case UPDATE_STEP_DATA: {
            const newData = action.stepData; 
            const newStepsData = state.stepsData; 
            newStepsData[action.stepNumber] = newData; 

            return {
                ...state, 
                stepsData: newStepsData
            }
        }
        default:
            return state;
    }
}
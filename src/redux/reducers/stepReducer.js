import { INCREASE_STEP_BY, DECREASE_STEP_BY, ADD_STEP_DATA, UPDATE_STEP_DATA, ADD_STEP_INITIAL_DATA } from '../actions/steps';

const initialState = {
    currentStepNumber: 0,
    maxSteps: 12,
    stepsData: []
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
        case ADD_STEP_INITIAL_DATA: {
            const stepNumber = action.stepNumber; 
            const initialData = action.initialData; 
            if (!state.stepsData[stepNumber]) {
                const newStepsData = state.stepsData; 
                newStepsData[stepNumber] = initialData;
                return {
                    currentStepNumber: state.currentStepNumber,
                    maxSteps: state.maxSteps, 
                    stepsData: newStepsData
                } 
            }
            else {
                return state; 
            }
            
        }
        case UPDATE_STEP_DATA: {
            const newData = action.stepData; 
            const newStepsData = state.stepsData; 
            newStepsData[action.stepNumber] = newData; 

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
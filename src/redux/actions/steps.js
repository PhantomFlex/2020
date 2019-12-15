export const INCREASE_STEP_BY = 'INCREASE_STEP_BY'; 
export const DECREASE_STEP_BY = 'DECREASE_STEP_BY'; 

export const UPDATE_STEP_DATA = "UPDATE_STEP_DATA"; 
export const ADD_STEP_DATA = "ADD_STEP_DATA";

export const increaseStep = (increaseBy) => {
    return {
        type: INCREASE_STEP_BY, 
        increaseBy
    }
}

export const decreaseStep = (decreaseBy) => {
    return {
        type: DECREASE_STEP_BY,
        decreaseBy
    }
}
 

export const addStepData = (stepNumber) => {
    return {
        type: ADD_STEP_DATA, 
        stepNumber
    }
}

export const updateStepData = (stepNumber, stepData) => {
    return {
        type: UPDATE_STEP_DATA, 
        stepNumber, 
        stepData
    }
}
export const SAVE_INPUT_VALUE = 'INPUT/SAVE_INPUT_VALUE'; 
export const SAVE_DATA_BY_STEP = 'INPUT/SAVE_DATA_BY_STEP'; 

export const saveValue = (value) => {
    return {
        type: SAVE_INPUT_VALUE,
        value
    }
}

export const saveDataFromStep = (stepNumber, data) => {
    return {
        type: SAVE_DATA_BY_STEP,
        stepNumber,
        stepData: data 
    }
}
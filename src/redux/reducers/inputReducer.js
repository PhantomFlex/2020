import { SAVE_INPUT_VALUE, SAVE_DATA_BY_STEP } from './../actions/input';

const initialState = {
    value: "hello", 
    stepNumber: 0,
    stepData: {}
};

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INPUT_VALUE: {
            return {
                ...state,
                value: action.value
            }
        }
        case SAVE_INPUT_VALUE: {
            return {
                ...state, 
                stepNumber: action.stepNumber,
                stepData: action.stepData
            }
        }
        default:
            return state
    }
}
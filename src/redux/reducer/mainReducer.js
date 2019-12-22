import {NEXT_STEP, PREV_STEP, UPDATE_STEP_DATA} from "../actions/actions";

const initialState = {
    currentStep: 0,
    countSteps: 12,
    stepsData: [
        {
            stepNumber: 1,
            checkBoxValues: [true, false, true, false, false, false]
        },
        {
            stepNumber: 2,
            inputValue: ""
        }

    ]
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_STEP: {
            if (state.currentStep < state.countSteps) {
                return {
                    ...state,
                    currentStep: state.currentStep + 1
                }
            }
            return state;
        }
        case PREV_STEP: {
            if (state.currentStep > 0) {
                return {
                    ...state,
                    currentStep: state.currentStep - 1
                }
            }
            return state;
        }
        case UPDATE_STEP_DATA: {
            return {
                ...state,
                stepsData: state.stepsData.map(stepData => stepData.stepNumber === action.stepNumber ? action.stepData : stepData)
            }
        }
        default: {
            return state;
        }
    }
};

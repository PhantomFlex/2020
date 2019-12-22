import {NEXT_STEP, PREV_STEP, UPDATE_STEP_DATA} from "../actions/actions";

const initialState = {
    currentStep: 0,
    countSteps: 12,
    stepsData: [
        {
            stepNumber: 1,
            checkBoxValues: [false, false, false, false, false, false]
        },
        {
            stepNumber: 2,
            inputValue: ""
        },
        {
            stepNumber: 3,
            firstInputValue: "",
            secondInputValue: ""
        },
        {
            stepNumber: 4,
            firstInputValue: "",
            secondInputValue: ""
        },
        {
            stepNumber: 5,
            firstInputValue: "",
            secondInputValue: ""
        },
        {
            stepNumber: 6,
            firstInputValue: "",
            secondInputValue: ""
        },
        {
            stepNumber: 7,
            firstInputValue: "",
            secondInputValue: ""
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

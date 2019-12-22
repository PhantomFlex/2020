import {NEXT_STEP, PREV_STEP, UPDATE_STEP_DATA, FINAL_STEP, FIRST_STEP} from "../actions/actions";

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
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 4,
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 5,
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 6,
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 7,
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 8,
            answer: false
        },
        {
            stepNumber: 9,
            inputNumber1: "",
            inputNumber2: "",
        },
        {
            stepNumber: 10,
            inputNumber1: "",
            inputNumber2: "",
            inputNumber3: "",
            inputNumber4: "",
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
        case FINAL_STEP: {
            return {
                ...state,
                currentStep: 11
            }
        }
        case FIRST_STEP: {
            return {
                ...state,
                currentStep: 0
            }
        }
        default: {
            return state;
        }
    }
};

export const NEXT_STEP = "NEXT_STEP";
export const PREV_STEP = "PREV_STEP";
export const FINAL_STEP = "FINAL_STEP";
export const FIRST_STEP = "FIRST_STEP";
export const UPDATE_STEP_DATA = "UPDATE_STEP_DATA";


export const nextStepAction = () => ({
    type: NEXT_STEP
});

export const prevStepAction = () => ({
    type: PREV_STEP
});

export const updateStepData = (stepNumber, stepData) => ({
    type: UPDATE_STEP_DATA,
    stepNumber,
    stepData
});

export const finalStepAction = () => ({
    type: FINAL_STEP
});

export const firstStepAction = () => ({
    type: FIRST_STEP
});

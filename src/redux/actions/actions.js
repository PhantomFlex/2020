export const NEXT_STEP = "NEXT_STEP";
export const PREV_STEP = "PREV_STEP";
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

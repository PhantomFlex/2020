import { observable } from 'mobx-react'; 

class StepsStore {
    @observable currentStep = 0;
    @observable maxSteps = 12;  
    get currentStep() {
        return this.currentStep; 
    }

    get maxSteps() {
        return this.maxSteps; 
    }

    nextStep() {
        this.currentStep += 1; 
    }

    prevStep() {
        this.currentStep -= 1; 
    }
}
import React from 'react';
import { Button } from '../Button';

export const ButtonContainer = ({ prevStep, nextStep, disableNextButton }) => {
    return (
        <React.Fragment>
            <div className="button-container">
                <Button onClick={prevStep} isNext={false}>Назад</Button>
                <Button onClick={nextStep} isNext={true} disabled={disableNextButton}>Далее</Button>
            </div>
        </React.Fragment>
    );
}
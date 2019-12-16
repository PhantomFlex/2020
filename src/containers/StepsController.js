import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseStep, increaseStep } from '../redux/actions/steps';
import { Slide0 } from './../components/slides/Slide0';
import { Slide1 } from './../components/slides/Slide1';
import { Slide2 } from './../components/slides/Slide2';
import { Slide3 } from './../components/slides/Slide3';
import { Slide4 } from './../components/slides/Slide4';
import { Slide5 } from './../components/slides/Slide5';
import { Slide6 } from './../components/slides/Slide6';
import { Slide7 } from './../components/slides/Slide7';
import { Slide8 } from './../components/slides/Slide8';
import { Slide9 } from './../components/slides/Slide9';
import { Slide10 } from '../components/slides/Slide10';
import { Slide11 } from './../components/slides/Slide11';
import { Slide12 } from './../components/slides/Slides12';

import { Button } from './../components/Button';

export function StepsController(props) {

    const dispatch = useDispatch();
    function nextStep() {
        const { step, maxStep } = props;
        if (step < maxStep) {
            dispatch(increaseStep(1));
        }
    }

    function prevStep() {
        const { step } = props;
        if (step > 0) {
            dispatch(decreaseStep(1));
        }
    }

    const { step } = props;
    let Slide;
    let ButtonContainer = () => (
        <div className="button-container">
            <Button onClick={prevStep} isNext={false}>Назад</Button>
            <Button onClick={nextStep} isNext={true}>Далее</Button>
        </div>);
    switch (step) {
        case 0: {
            Slide = Slide0;
            ButtonContainer = () => (
                <div className="firstSlide">
                    <Button onClick={nextStep} isNext={true}>Начать</Button>
                </div>
            ); 
            break;
        }
        case 1: {
            Slide = Slide1;
            break;
        }
        case 2: {
            Slide = Slide2;
            break;
        }
        case 3: {
            Slide = Slide3;
            break;
        }
        case 4: {
            Slide = Slide4;
            break;
        }
        case 5: {
            Slide = Slide5;
            break;
        }
        case 6: {
            Slide = Slide6;
            break;
        }
        case 7: {
            Slide = Slide7;
            break;
        }
        case 8: {
            Slide = Slide8;
            break;
        }
        case 9: {
            Slide = Slide9;
            break;
        }
        case 10: {
            Slide = Slide10;
            break;
        }
        case 11: {
            Slide = Slide11;
            break;
        }
        case 12: {
            Slide = Slide12;
            break;
        }
        default: {
            Slide = () => <div>Empty</div>;
        }
    }

    return (
        <div className="slide-container">
            <Slide />
            <ButtonContainer />
        </div>
    );
}





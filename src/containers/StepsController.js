import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStepAction, prevStepAction } from "../redux/actions/actions";
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
import { MeasureSlide } from "../components/MeasureSlide/MeasureSlide";

export const StepsController = () => {
    const dispatch = useDispatch();

    const nextStep = () => {
        dispatch(nextStepAction());
    };

    const prevStep = () => {
        dispatch(prevStepAction());
    };

    const step = useSelector(state => state.currentStep);
    let Slide;

    const slideProps = {nextStep, prevStep };
    switch (step) {
        case 0: {
            Slide = Slide0;
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
            Slide = MeasureSlide;
            break;
        }
        case 4: {
            Slide = MeasureSlide;
            break;
        }
        case 5: {
            Slide = MeasureSlide;
            break;
        }
        case 6: {
            Slide = MeasureSlide;
            break;
        }
        case 7: {
            Slide = MeasureSlide;
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
            <Slide {...slideProps} />
        </div>
    );
}





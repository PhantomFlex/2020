import React from 'react';

import { Slide1 } from './../components/slides/Slide1';
import { Slide2 } from './../components/slides/Slide2';
import { Slide3 } from './../components/slides/Slide3';

export class StepsController extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { step } = this.props;

        let Slide;
        switch (step) {
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
            default: {
                Slide = () => <div>Empty</div>;
            }
        }
        return (
            <div>
                <Slide />
            </div>
        );
    }
}



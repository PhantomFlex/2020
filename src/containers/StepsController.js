import React from 'react';

import { Slide0 } from './../components/slides/Slide0';
import { Slide1 } from './../components/slides/Slide1';
import { Slide2 } from './../components/slides/Slide2';
import { Slide3 } from './../components/slides/Slide3';
import { Slide4 } from './../components/slides/Slide4';


export class StepsController extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }

        this.updateData = (field, value) => {
            const { data } = this.state;

            data[field] = value; 
            this.setState({ data })
        }
    }



    render() {
        const { step } = this.props;

        let Slide;
        switch (step) {
            case 0:{
                Slide=Slide0;
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
                Slide=Slide4;
                break;
            }
            default: {
                Slide = () => <div>Empty</div>;
            }
        }
        console.log(this.state.data); 
        return (
            <div>    
                <Slide dataCallback={this.updateData} data={this.state.data}/>
            </div>
        );
    }
}



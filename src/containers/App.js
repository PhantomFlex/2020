import React from 'react';
import './App.css';
import { Slide1 } from './../components/slides/Slide1.js';
import { Slide2 } from './../components/slides/Slide2.js';
import StepsController from './StepsController';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            step: 0,
            maxSteps: 12,
            data: {}
        }

        this.nextStep = () => {
            const { step, maxSteps } = this.state;
            if (step < maxSteps) {
                this.setState({ step: step + 1 })
            }
        }

        this.prevStep = () => {
            const { step } = this.state;
            if (step > 0) {
                this.setState({ step: step - 1 })
            }
        }
    }

    render() {
        return (
            <div className="App">
                <img className='logo' src='./images/logo.png'/>
                <StepsController step={this.state.step} dataCallback={(data) => this.setState({ data })} />
                <div>
                    <button onClick={this.prevStep}>Назад</button>
                    <button onClick={this.nextStep}>Далее</button>
                </div>
            </div>
        );
    }
}
export default App;



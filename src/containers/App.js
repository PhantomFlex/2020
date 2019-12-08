import React from 'react';
import './App.css';
import { Slide1 } from './../components/slides/Slide1.js';
import {Slide2} from './../components/slides/Slide2.js';
import { StepsController } from './StepsController';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            step: 0, 
            data: {}
        }
    }

    

    render() {
        console.log(this.state.data); 
        return (
            <div className="App">
                <h1>Блок-интро</h1>
                <Slide2/>

                <StepsController step={this.state.step} dataCallback={(data) => this.setState({data})}/>
            </div>
        );
    }
}
export default App;

/*<div>
                    <button onClick={() => this.setState({step: this.state.step + 1})}>+</button>
                    <button onClick={() => this.setState({step: this.state.step - 1})}>-</button>
                </div> */

import React from 'react';
import './App.css';
import { StepsController } from './StepsController';


export const App = () => {

    return (
        <div className="App">
            <img className="logo" src="images/Logo.png" alt="logo"/>
            <StepsController />
        </div>
    );
};


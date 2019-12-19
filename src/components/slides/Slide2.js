import React from 'react';
import { Select } from './../Select';
export function Slide2() {
    const options = [1, 2, 3, 4, 5];
    const regions = ['EU', 'UA'];
    return (
        <div className="slide">
            <h1>Размер, который вы обычно носите</h1>
            <Select dat={options} />
            <Select dat={regions} />
        </div>




    )
}
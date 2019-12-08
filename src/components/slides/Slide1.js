import React from 'react';
import {Checkbox} from './../Checkbox';
import './../../CssSlaides/CssSlaides1.css';


export function Slide1(){
    return(
       <div>
         <Checkbox label="рулетка"/>
         <Checkbox label="линейка"/>
         <Checkbox label="шпатель"/>
         <Checkbox label="винил"/>
        <button>Далее</button>
       </div> 
    )
}

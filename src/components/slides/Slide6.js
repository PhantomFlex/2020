import React from 'react';
import {Doubleinput} from './../Doubleinput'

export function Slide6(){
    return(
        <div>
            <h1>Мерка 3 - Подъем</h1>
            <p>Переместите метр под сгиб стопы. Чуть ниже точки сгиба стопы, измерьте длину окружности подъема.</p>
            <iframe className='video' src='https://youtu.be/8TRAeznuMqg'/>
            <Doubleinput />
        </div>
    )
}
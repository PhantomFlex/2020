import React from 'react';
import {Doubleinput} from './../Doubleinput'

export function Slide8(){
    return(
        <div>
            <h1>Мерка 5 - Ширина пучка</h1>
            <p>Отметьте на обведенном контуре самое широкое место и измерьте его. Сделайте фото обвода стопы с отмеченными местами точек длины и пучка. Оно вам понадобится в чате с менеджером.</p>
            <iframe className='video' src='https://youtu.be/8TRAeznuMqg'/>
            <Doubleinput />
        </div>
    )
}
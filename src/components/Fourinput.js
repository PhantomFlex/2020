import React from 'react';

export function Fourinput(){
    return(
        <div className='fourinputFix'>
            <div>
                <p>левая окруж:</p>
                <input className='inputFix'/>
                <p>левая от пола:</p>
            <   input className='inputFix'/>
            </div>
            <div>
            <p>правая окруж:</p>
            <input className='inputFix'/>
            <p>правая от пола:</p>
            <input className='inputFix'/>
            </div>
        </div>
    )
}
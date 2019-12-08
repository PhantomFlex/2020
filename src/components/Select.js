import React from 'react'

export function Select(props){
    return <select>{props.dat.map(el=><option>{el}</option>)}</select>
    
}
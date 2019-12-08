import React from 'react'

export function Select(props) {
    return <select>{props.dat.map((el, index) => <option key={index}>{el}</option>)}</select>

}
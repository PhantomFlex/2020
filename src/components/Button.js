import React from 'react';
export function Button(props) {
    const style = props.isNext ? "next-button" : "prev-button"; //тернарный оператор 
    return (
        <div onClick={props.onClick}>
            {!props.isNext && <img src="/images/arrow.png" />}
            <button className={style} disabled={props.disabled} >{props.children}</button>
        </div>
    )
}
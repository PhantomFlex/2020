import React from 'react';
export const Button = (props) => {
    const style = props.isNext ? "next-button" : "prev-button";
    return (
        <div onClick={props.onClick}>
            {!props.isNext && <img src="/images/arrow.png" />}
            <button className={style} disabled={props.disabled} >{props.children}</button>
        </div>
    )
};

export const SimpleButton = (props) => {

    return (
        <div onClick={props.onClick}>
            <button className="prev-button" disabled={props.disabled} >{props.children}</button>
        </div>
    )
};

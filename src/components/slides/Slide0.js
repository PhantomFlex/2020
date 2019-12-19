import React from 'react';
import { Button } from './../Button';

export const Slide0 = ({nextStep}) => {
    return (
        <React.Fragment>
            <div>
                <h1>Сниматель мерок</h1>
                <p>15 минут Вам потребуется,чтобы снять мерки.<br />
                    Столько же мы тратим на сборы в торговый центр</p>
            </div>
            <div className="firstSlide">
                <Button onClick={nextStep} isNext={true}>Начать</Button>
            </div>
        </React.Fragment>
    )
}


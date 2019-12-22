import React from 'react';
import {useSelector} from "react-redux";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";
import {SimpleButton, Button} from "../Button";

export const FinalSlide = ({prevStep, firstStep}) => {
    const stepsData = useSelector(state => state.stepsData);
    const formResultData = () => {
        const size = stepsData.filter(stepData => stepData.stepNumber === 2)[0].inputValue;

        let leftSizes = '';
        let rightSizes = '';
        for (let i = 2; i <= 6; i++) {
            leftSizes += `${i - 1} - ${stepsData[i].inputNumber1}/`;
            rightSizes += `${i - 1} - ${stepsData[i].inputNumber2}/`;
        }

        if (stepsData[7].answer) {
            leftSizes += `${6} - ${stepsData[8].inputNumber1} / ${7} - ${stepsData[9].inputNumber1}(${stepsData[9].inputNumber2})`;
            rightSizes += `${6} - ${stepsData[8].inputNumber2} / ${7} - ${stepsData[9].inputNumber3}(${stepsData[9].inputNumber4})`;
        }

        return `Размер: ${size}\n Левая: ${leftSizes}\nПравая ${rightSizes} `;
    };


    return (
        <React.Fragment>
            <h1>Мерки сняты, спасибо</h1>
            <p>Нажмите «Скопировать» и вставьте в чат с вашим менеджером. Приложите фото обведённой ноги.</p>
            <textarea id="textArea" className="resultTextArea">
                {formResultData()}
            </textarea>
            <Button isNext={true} onClick={() => {
                const textArea = document.getElementById('textArea');
                textArea.select();
                document.execCommand('copy');
            }}>Копировать</Button>
            <SimpleButton onClick={firstStep}>Снять мерки заново</SimpleButton>
            <ButtonContainer showNextButton={false} prevStep={prevStep}/>
        </React.Fragment>
    );
};

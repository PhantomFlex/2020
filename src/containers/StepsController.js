import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {nextStepAction, prevStepAction, finalStepAction, firstStepAction} from "../redux/actions/actions";
import {WelcomeSlide} from '../components/slides/WelcomeSlide';
import {GetReadySlide} from '../components/slides/GetReadySlide';
import {UsualSizeSlide} from '../components/slides/UsualSizeSlide';
import {QuestionSlide} from '../components/slides/QuestionSlide';
import {FinalSlide} from '../components/slides/FinalSlide';
import {MeasureSlide} from "../components/slides/MeasureSlide";

export const StepsController = () => {
    const dispatch = useDispatch();

    const nextStep = () => {
        dispatch(nextStepAction());
    };

    const prevStep = () => {
        dispatch(prevStepAction());
    };

    const finalStep = () => {
        dispatch(finalStepAction());
    };

    const firstStep = () => {
        dispatch(firstStepAction());
    };

    const step = useSelector(state => state.currentStep);
    let Slide;
    const slideProps = {nextStep, prevStep, stepNumber: step};
    switch (step) {
        case 0: {
            Slide = WelcomeSlide;
            break;
        }
        case 1: {
            Slide = GetReadySlide;
            break;
        }
        case 2: {
            Slide = UsualSizeSlide;
            break;
        }
        case 3: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 1 - Длина";
            slideProps.text = "На лист бумаги поставьте стопу и перенесите на нее вес тела. Поставьте коробок спичек вплотную к самому длинному пальцу. Не отрывая пятку от пола поднимите пальцы вверх, отметьте ручкой место соприкосновения пальцев с коробком. То же самое повторите с пяткой. Измерьте расстояние между точками.";
            break;
        }
        case 4: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 2 - Обхват пучка";
            slideProps.text = "Положите гибкий метр под самое широкое место стопы, перед пальцами. Чаще всего оно находится около косточки большого пальца. Перенесите вес тела на стопу. Измерьте длину окружности стопы.";
            break;
        }
        case 5: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 3 - Подъем";
            slideProps.text = "Переместите метр под сгиб стопы. Чуть ниже точки сгиба стопы, измерьте длину окружности подъема.";
            break;
        }
        case 6: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 4 - Длина обвода";
            slideProps.text = "Поставьте стопу на лист бумаги, перенесите на нее вес. Возьмите ручку или карандаш держа ее прямо, без наклонов, обведите стопу по контуру, уберите стопу. Отметьте крайние точки пальцев и пятки и измерьте расстояние между ними.";
            break;
        }
        case 7: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 5 - Ширина пучка";
            slideProps.text = "Отметьте на обведенном контуре самое широкое место и измерьте его. Сделайте фото обвода стопы с отмеченными местами точек длины и пучка. Оно вам понадобится в чате с менеджером.";
            break;
        }
        case 8: {
            Slide = QuestionSlide;
            slideProps.finalStep = finalStep;
            slideProps.questionText = "Обувь будет выше щиколотки?";
            break;
        }
        case 9: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 6 - Обхват голени";
            slideProps.text = "Отмерьте 17 см от пола на ноге. В этом месте измерьте длину окружности голени.";
            break;
        }
        case 10: {
            Slide = MeasureSlide;
            slideProps.url = "https://youtu.be/8TRAeznuMqg";
            slideProps.title = "Мерка 7 - Обхват икры";
            slideProps.text = "Если вы планируете носить штаны внутрь обуви, измеряйте икру вместе с штаниной. Измерьте длину окружности икры в самом широком месте. После, измерьте расстояние от пола до самого широкого места икры.";
            slideProps.isFourInputs = true;
            break;
        }
        case 11: {
            Slide = FinalSlide;
            slideProps.firstStep = firstStep;
            break;
        }
        default: {
            Slide = () => <div>Empty</div>;
        }
    }

    return (
        <div className="slide-container">
            <Slide {...slideProps} />
        </div>
    );
}






import { useRef } from 'react';
import Button from '../../../../components/button/Button';
import './feedbackcontent.scss';

function FeedbackContent() {

    let ref0 = useRef<HTMLInputElement>(null);
    let ref1 = useRef<HTMLInputElement>(null);
    let ref2 = useRef<HTMLInputElement>(null);
    let ref3 = useRef<HTMLInputElement>(null);
    let ref4 = useRef<HTMLInputElement>(null);

    const fetchData = () => {
        console.log("Бэкенд был выключен :)")
    }

    return (
        <div className="feedback">
            <div className="feedback__title title">
                Отзыв про сайт
            </div>
            <div className="feedback__subtitle">
                Поделитесь опытом использования нашим сайтом
            </div>
            <div className="feedback__secton section">
                
                <div className="feedback__form">
                    <div className="feedback__form__text">
                        Проблемы с дизайном основного сайта Тестцентр
                    </div>
                    <input ref={ref0} type="text" className="feedback__form__input" placeholder='Пишем здесь...' />
                </div>

                <div className="feedback__form">
                    <div className="feedback__form__text">
                        Что вы бы хотели ещё добавить?
                    </div>
                    <input ref={ref1} type="text" className="feedback__form__input" placeholder='Пишем здесь...' />
                </div>

                <div className="feedback__form">
                    <div className="feedback__form__text">
                        Насколько легко было пользоваться нашим сайтом?
                    </div>
                    <input ref={ref2} type="text" className="feedback__form__input" placeholder='Пишем здесь...' />
                </div>
                <div className="feedback__form">
                    <div className="feedback__form__text">
                        Вы бы использовали этот сайт вместо основного?
                    </div>
                    <input ref={ref3} type="text" className="feedback__form__input" placeholder='Пишем здесь...' />
                </div>
                <div className="feedback__form">
                    <div className="feedback__form__text">
                        Оцените новый сайт от 1 до 10
                    </div>
                    <input ref={ref4} type="text" className="feedback__form__input" placeholder='Пишем здесь...' />
                </div>

                <Button classes='feedback__button' text='Отправить' url={null} onClick={() => {
                    fetchData();
                }}></Button>

            </div>
        </div>
    );
}

export default FeedbackContent;
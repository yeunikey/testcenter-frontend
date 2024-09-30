
import { useEffect, useState } from 'react';
import './test.scss';
import axios from 'axios';
import { useAppSelector } from '../../../../../store/hooks';
import { selectUser } from '../../../../../store/reducers/userReducer';
import { Certificate } from 'crypto';

interface ITest {
    date: string,
    status: string,
    ict: string,
    certificate: string,
    score: number,
    subject: string,
    subjects: { name: string, appeal: number, all: number }[]
}

function Test() {

    let user = useAppSelector(selectUser);
    let [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("https://app.testcenter.kz/ent/student/app/api/v1/app/items", {
            headers: {
                Authorization: "Bearer " + user?.session
            }
        }).then((request) => {
            let tests: ITest[] = [];

            request.data.items.map((item: any) => {

                const date = new Date(item.createdAt * 1000);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

                let subjects: { name: string, appeal: number, all: number }[] = [];

                item.subjects.map((subject: any) => {
                    subjects.push({
                        name: subject.subject.name.ru,
                        appeal: subject.appealScore,
                        all: subject.totalScore
                    })
                });

                let test = {
                    date: formattedDate,
                    status: "Завершено",
                    ict: item.formattedId,
                    certificate: item.foreignLangCertType.name.ru,
                    score: item.totalScore,
                    subject: item.profileSubjectPair.name.ru,
                    subjects: subjects
                }
                tests.push(test);

            })
            setTests(tests);
        }).catch((error) => {
            console.log(error)
            return;
        })
    }

    return (
        <>
            <div className="title">Единое национальное тестирование</div>
            <div className="section">
                <div className="grant__items">
                    {tests.map((item: ITest, i) => {
                        return (
                            <Item key={i} item={item}></Item>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

function Item(props: { item: ITest }) {
    return (
        <div className="grant__item">
            <div className="grant__item__title title-3">
                Единое национальное тестирование
                / Выпускники школ текущего года
            </div>
            <div className="grant__item__subtitle">
                <div className="grant__item__date">
                    Дата подачи: <b>{props.item.date}</b>
                </div>
                <div className={"grant__item__status"}>
                    {props.item.status}
                </div>
            </div>
            <div className="grant__item__line"></div>

            <div className="grant__item__form">
                <div className="grant__item__form__key">
                    ИКТ
                </div>
                <div className="grant__item__form__value">
                    {props.item.ict}
                </div>
            </div>
            <div className="grant__item__form">
                <div className="grant__item__form__key">
                    Cертификат английского языка
                </div>
                <div className="grant__item__form__value">
                    {props.item.certificate}
                </div>
            </div>
            <div className="grant__item__form">
                <div className="grant__item__form__key">
                    Предмет
                </div>
                <div className="grant__item__form__value">
                    {props.item.subject}
                </div>
            </div>
            <div className="grant__item__line"></div>
            <div className="grant__item__subjects">
                <div className="grant__item__subjects__title title-3">Набранные баллы по предметам</div>
                <div className="grant__item__subjects__table">
                    <div>Предмет</div>
                    <div>Баллов за апелляцию</div>
                    <div>Баллов по предмету</div>
                </div>
                {props.item.subjects.map((subject: any, i) => {
                    return (
                        <div key={i} className="grant__item__subject">
                            <div>{subject.name}</div>
                            <div>{subject.appeal}</div>
                            <div>{subject.all}</div>
                        </div>
                    )
                })}
            </div>
            <div className="grant__item__result">
                <div className="grant__item__result__text title-3">
                    Итого набрано:
                </div>
                <div className="grant__item__result__score title">
                    {props.item.score}
                </div>
            </div>
        </div>
    )
}

export default Test;
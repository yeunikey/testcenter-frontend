
import { useEffect, useState } from 'react';
import './grant.scss';
import axios from 'axios';
import { useAppSelector } from '../../../../../store/hooks';
import { selectUser } from '../../../../../store/reducers/userReducer';

interface IGrant {
    date: string,
    status: string,
    ict: number,
    source: string,
    universities: {
        direction: string,
        university: string
    }[]
}

function Grant() {

    let [grants, setGrants] = useState<IGrant[]>([]);
    let user = useAppSelector(selectUser);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("https://app.testcenter.kz/konkurs/bach/app/api/v1/app/items", {
            headers: {
                Authorization: "Bearer " + user?.session
            }
        }).then((request) => {
            let grants: IGrant[] = [];
            request.data.items.map((item: any) => {

                const date = new Date(item.createdAt * 1000);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

                let universities: { direction: string; university: string; }[] = [];

                item.choices.map((choices: any) => {
                    universities.push({
                        direction: choices.eduProgram.code + " " + choices.eduProgram.name.ru,
                        university: choices.institutes[0].id + " " + choices.institutes[0].name.ru
                    })
                });

                let grant = {
                    date: formattedDate,
                    ict: item.formattedId,
                    source: item.konkursAppSource.name.ru,
                    status: item.status.name.ru,
                    universities: universities
                };
                grants.push(grant)

            })
            setGrants(grants);
        }).catch((error) => {
            console.log(error)
            return;
        })
    }

    return (
        <>
            <div className="title">История конкурса грантов</div>
            <div className="section">
                <div className="grant__items">
                    {grants.map((grant: IGrant, i) => {
                        return (<Item key={i} item={grant}></Item>)
                    })}
                </div>
            </div>
        </>
    );
}

function Item(props: {item: IGrant}) {
    return (
        <div className="grant__item">
            <div className="grant__item__title title-3">
                Конкурс образовательных грантов высшего образования
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
            <div>
                <div className="grant__item__form__key">
                    Источник
                </div>
                <div className="grant__item__form__value">
                    {props.item.source}
                </div>
            </div>
            <div className="grant__item__line"></div>
            <div className="grant__item__universities">
                <div className="grant__item__universities__title title-3">Выбранные ГОП и ВУЗы</div>
                <div className="grant__item__universities__table">
                    <div>ГОП</div>
                    <div>Наименование ВУЗа</div>
                </div>
                {props.item.universities.map((university: any, i) => {
                    return (
                        <div key={i} className="grant__item__university">
                            <div className="grant__item__university__direction">{university.direction}</div>
                            <div className="grant__item__university__name">{university.university}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Grant;
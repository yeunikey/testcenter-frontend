import { useState } from "react";
import { Content, PagerItem } from "../../Dashboard";

import './statementcontent.scss';
import First from "./First";
import Second from "./Second";
import Third from "./Third";

function StatementContent() {

    let pages = [
        <First></First>,
        <Second></Second>,
        <Third></Third>
    ]
    let [page, setPage] = useState(0);

    return (
        <Content
            classes='profilecontent'
            pager={<Pager page={page} setPage={setPage} ></Pager>}
            content={<>{pages[page]}</>}
        ></Content>
    );
}

function Pager(props: { page: number, setPage: Function }) {
    return (
        <>
            <PagerItem
                text='Оценка знаний педагогов'
                index={0}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(0)
                }}
            ></PagerItem>
            <PagerItem
                text='Единое национальное тестирование'
                index={1}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(1)
                }}
            ></PagerItem>
            <PagerItem
                text='Послевузовское образование (магистратура, докторантура)'
                index={2}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(2)
                }}
            ></PagerItem>
        </>
    )
}

export default StatementContent;
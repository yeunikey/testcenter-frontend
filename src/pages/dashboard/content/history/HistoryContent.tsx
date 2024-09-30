
import { useState } from 'react';
import { Content, PagerItem } from '../../Dashboard';
import Grant from './grant/Grant';

import './historycontent.scss';
import Test from './test/Test';

function HistoryContent() {

    let pages = [
        <Grant></Grant>,
        <Test></Test>
    ]
    let [page, setPage] = useState(0);

    return (
        <Content
            classes='historycontent'
            pager={<Pager page={page} setPage={setPage} ></Pager>}
            content={<>{pages[page]}</>}
        ></Content>
    );
}

function Pager(props: { page: number, setPage: Function }) {
    return (
        <>
            <PagerItem
                text='Конкурс грантов'
                index={0}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(0)
                }}
            ></PagerItem>
            <PagerItem
                text='Результат ЕНТ'
                index={1}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(1)
                }}
            ></PagerItem>
        </>
    )
}

export default HistoryContent;

import { useState } from 'react';
import { Content, Form, PagerItem } from '../../Dashboard';

import './profilecontent.scss';
import Info from './Info';
import Contact from './Contact';

function ProfileContent() {

    let pages = [
        <Info></Info>,
        <Contact></Contact>
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

function Pager(props: {page: number, setPage: Function}) {
    return (
        <>
            <PagerItem
                text='Мои данные'
                index={0}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(0)
                }}
            ></PagerItem>
            <PagerItem
                text='Контакты'
                index={1}
                currentIndex={props.page}
                onSelect={() => {
                    props.setPage(1)
                }}
            ></PagerItem>
        </>
    )
}

export default ProfileContent;
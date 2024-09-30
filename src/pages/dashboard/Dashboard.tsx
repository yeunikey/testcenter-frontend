
import { useAppSelector } from '../../store/hooks';
import { selectNavigation } from '../../store/reducers/navigationReducer';

import ProfileContent from './content/profile/ProfileContent';
import HistoryContent from './content/history/HistoryContent';
import StatementContent from './content/statement/StatementContent';

import './dashboard.scss';
import './styles/pager.scss';
import './styles/content.scss';
import FeedbackContent from './content/form/FeedbackContent';

function Dashboard() {
    let navigation = useAppSelector(selectNavigation);

    return (
        <div className="dashboard">
            <div className="dashboard__content">
                <div className="container">
                    {navigation.id == "profile" && (<ProfileContent></ProfileContent>)}
                    {navigation.id == "history" && (<HistoryContent></HistoryContent>)}
                    {navigation.id == "statement" && (<StatementContent></StatementContent>)}
                    {navigation.id == "feedback" && (<FeedbackContent></FeedbackContent>)}
                </div>
            </div>
        </div>
    );
}

export function Content(props: { classes: string, pager: JSX.Element, content: JSX.Element }) {
    return (
        <div className={props.classes}>
            <div className={props.classes + "__content contents"}>
                <div className="pager">
                    {props.pager}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export function PagerItem(props: { text: string, onSelect: Function, index: number, currentIndex: number }) {
    return (
        <div
            className={"pager__item" +
                (props.index == props.currentIndex
                    ? " pager__item__selected"
                    : ""
                )}
            onClick={() => props.onSelect()}>
            {props.text}
        </div>
    )
}

export function Form(props: { text: string, value: string, editable: boolean }) {
    return (
        <div className="form">
            <div className="key">
                {props.text}
            </div>
            <div className="value">
                {props.value}
                {props.editable && (<svg className="value__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path></svg>
                )}
            </div>
        </div>
    )
}

export default Dashboard;
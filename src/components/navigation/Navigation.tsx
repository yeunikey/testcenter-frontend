
import './navigation.scss';

import { INavigation, navigations, selectNavigation, setNavigation } from '../../store/reducers/navigationReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/reducers/userReducer';

function Navigation() {
    
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__content">
                    <div className="navigation__title title">
                        Личный кабинет
                    </div>
                    <div className="navigation__items">

                        {navigations.map((navigation: INavigation, i) => {
                            return <Item key={i} item={navigation}></Item>
                        })}

                    </div>
                </div>
            </div>
            <div className="navigation__background">
                <svg className="navigation__background__first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path></svg>
                <svg className="navigation__background__second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.9994 2V4H14.9994V7.24291C14.9994 8.40051 15.2506 9.54432 15.7357 10.5954L20.017 19.8714C20.3641 20.6236 20.0358 21.5148 19.2836 21.8619C19.0865 21.9529 18.8721 22 18.655 22H5.34375C4.51532 22 3.84375 21.3284 3.84375 20.5C3.84375 20.2829 3.89085 20.0685 3.98181 19.8714L8.26306 10.5954C8.74816 9.54432 8.99939 8.40051 8.99939 7.24291V4H7.99939V2H15.9994ZM13.3873 10.0012H10.6115C10.5072 10.3644 10.3823 10.7221 10.2371 11.0724L10.079 11.4335L6.12439 20H17.8734L13.9198 11.4335C13.7054 10.9691 13.5276 10.4902 13.3873 10.0012ZM10.9994 7.24291C10.9994 7.49626 10.9898 7.7491 10.9706 8.00087H13.0282C13.0189 7.87982 13.0119 7.75852 13.0072 7.63704L12.9994 7.24291V4H10.9994V7.24291Z"></path></svg>            
            </div>
        </div>
    );
}

function Item(props: { item: INavigation }) {
    let navigation = useAppSelector(selectNavigation);
    let dispatch = useAppDispatch();

    return (
        <div
            className={"navigation__item " +
                (navigation.id == props.item.id
                    ? " navigation__item__selected"
                    : ""
                )}
            onClick={
                () => {
                    dispatch(setNavigation(props.item))
                }
            }>
            {props.item.name}
        </div>
    )
}

export default Navigation;

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAuth, selectUser, setState } from '../../store/reducers/userReducer';
import './header.scss';
import Button from '../button/Button';

function Header() {
    let user = useAppSelector(selectUser);
    let isAuth = useAppSelector(selectAuth);

    let [dropdown, setDropdown] = useState(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header__content">

                    <div className="header__company">
                        <img className="header__company__logo" src="https://app.testcenter.kz/assets/images/logo-wo-words.png" alt="logo" />
                        <div className="header__company__name">Национальный центр <br />тестирования</div>
                    </div>

                    <div className="header__user" onClick={() => {
                        setDropdown(!dropdown)
                    }}>
                        {dropdown && (<Dropdown></Dropdown>)}
                        {isAuth && (<>
                            <div className="header__user__name">{user?.name + " " + user?.surname}</div>
                            <img src="https://moodle.astanait.edu.kz/pluginfile.php/248854/user/icon/boost/f1?rev=6888666" alt="user" className="header__user__logo" />
                        </>)}
                    </div>

                </div>
            </div>
        </div>
    );
}

function Dropdown() {
    let dispatch = useAppDispatch();
    return (
        <div className="dropdown">
            <div className="dropdown__title title-3">Кнопки</div>
            <div className="dropdown__items">
                <div className="dropdown__item">
                    <Button classes='exit__button' url={null} text='Выйти' onClick={() => {
                        window.localStorage.removeItem("session");
                        dispatch(setState({
                            isAuthentificated: false,
                            user: null
                        }))
                        window.location.href = "/";
                    }}></Button>
                </div>
            </div>
        </div>
    )
}

export default Header;
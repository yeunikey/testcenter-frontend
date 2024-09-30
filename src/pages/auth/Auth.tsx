
import { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAuth, selectUser, setState } from '../../store/reducers/userReducer';
import Dashboard from '../dashboard/Dashboard';
import './auth.scss';
import Button from '../../components/button/Button';
import Alert from '../../components/alert/Alert';
import axios from 'axios';
import Loading from '../loading/Loading';

export function AuthProvider() {

    let userState = useAppSelector(selectUser);
    let isAuth = useAppSelector(selectAuth);

    let [hasSession, setSession] = useState(true);
    let dispatch = useAppDispatch();

    const fetchData = (requestSession: string, token: string) => {
        axios.get("https://app.testcenter.kz/auth/api/v2/profile-info", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((request) => {
            setUser(requestSession, request);
        }).catch((error) => {

            dispatch(setState({
                isAuthentificated: false,
                user: null
            }))

            window.localStorage.removeItem("session");
        })
    }

    const setUser = (session: string, request: any) => {
        let data = request.data.data;

        dispatch(setState({
            isAuthentificated: true,
            user: {
                session: session,
                uniqueId: data.iin,
                name: data.firstname,
                surname: data.lastname,
                patronymic: data.patronymic,
                country: data.citizenship.name.ru,
                national: data.nation.name.ru,
                gender: data.sex.name.ru,
                phone: data.phoneNumber,
                email: data.email
            }
        }))
    }

    useEffect(() => {
        let session = window.localStorage.getItem("session");
        if (session == null) {
            setSession(false);
            return;
        }
        fetchData(session, session);
    }, []);

    return (<>
        {isAuth == false && hasSession ? (
            <Loading></Loading>
        ) : (
            <>
                {isAuth ? (
                    <>
                        <Navigation></Navigation>
                        <Dashboard></Dashboard>
                    </>
                ) : (
                    <Auth></Auth>
                )}
            </>
        )}
    </>
    );
}

function Auth() {
    let tokenRef = useRef<HTMLInputElement>(null);
    let [message, setMessage] = useState("");

    let dispatch = useAppDispatch();

    const fetchData = (requestSession: string | null, token: string) => {
        axios.get("https://app.testcenter.kz/auth/api/v2/profile-info", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((request) => {
            let session = requestSession == null ? (tokenRef.current?.value == null ? "" : tokenRef.current?.value) : requestSession;
            setUser(session, request);
        }).catch((error) => {
            setMessage("* Не удалось получить доступа")

            dispatch(setState({
                isAuthentificated: false,
                user: null
            }))

            window.localStorage.removeItem("session");
        })
    }

    const setUser = (session: string, request: any) => {
        let data = request.data.data;

        dispatch(setState({
            isAuthentificated: true,
            user: {
                session: session,
                uniqueId: data.iin,
                name: data.firstname,
                surname: data.lastname,
                patronymic: data.patronymic,
                country: data.citizenship.name.ru,
                national: data.nation.name.ru,
                gender: data.sex.name.ru,
                phone: data.phoneNumber,
                email: data.email
            }
        }))

        window.localStorage.setItem("session", session);
    }

    useEffect(() => {
        let session = window.localStorage.getItem("session");
        if (session == null) {
            return;
        }
        fetchData(session, session);
    }, []);

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__title title">Идентификация</div>
                <div className="auth__subtitle">
                    Введите ваш токен с Тестцентра
                </div>

                <div className="auth__secton section">

                    <div className="auth__form">
                        <div className="auth__form__text">
                            Токен
                        </div>
                        <input ref={tokenRef} type="text" className="auth__form__input" placeholder='Токен' />
                    </div>

                    <Button classes='auth__button' text='Войти' url={null} onClick={() => {
                        if (tokenRef.current?.value == undefined)
                            return
                        fetchData(null, tokenRef.current?.value)
                    }}></Button>
                    {message != "" && (
                        <div className="auth__message">
                            {message}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Auth;
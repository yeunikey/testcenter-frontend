import { useAppSelector } from "../../../../store/hooks";
import { selectUser } from "../../../../store/reducers/userReducer";
import { Form } from "../../Dashboard";

function Info() {

    let user = useAppSelector(selectUser);

    return (
        <>
            <div className="title">
                Мои данные
            </div>

            <div className="section">
                <Form text="ФИО" value={user?.name + " " + user?.surname + " " + user?.patronymic} editable={false}></Form>
                <Form text="ИИН" value={user?.uniqueId + ""} editable></Form>
                <Form text="Гражданство" value={user?.country + ""} editable={false}></Form>
                <Form text="Национальность" value={user?.national + ""} editable={false}></Form>
                <Form text="Пол" value={user?.gender + ""} editable={false}></Form>
                <Form text="Контактный телефон" value={"+" + user?.phone} editable></Form>
                
                <br/>

                <Form text="Электронный адрес" value={user?.email + ""} editable></Form>
                <Form text="Пароль" value="*****" editable></Form>
            </div>
        </>
    )
}

export default Info;
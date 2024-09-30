import { Form } from "../../Dashboard";

function Contact() {
    return (
        <>
            <div className="title">
                Контакты
            </div>

            <div className="section">
                <Form text='По вопросам работы веб-приложения' value='8 (7172) 69 50 69' editable={false}></Form>
                <Form text='QAZTEST' value='+7 (7172) 69 56 84, 69 52 85, 69 52 96' editable={false}></Form>
            </div>
        </>
    );
}

export default Contact;
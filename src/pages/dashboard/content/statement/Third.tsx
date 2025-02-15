import Alert from "../../../../components/alert/Alert";
import Bottom from "./Bottom";

function Third() {
    return (
        <>
            <div className="title">
                Послевузовское образование (магистратура, докторантура)
            </div>
            <div className="section">
                <Alert
                    classes="statementcontent__alert"
                    text={<>
                        Внимание, поступающий!
                        <br/>
                        <br/>
                        - До подачи заявления на конкурс по присуждению образовательного гранта, поступающий не должен иметь статус «обучающийся» в Национальной образовательной базе данных (Единой платформе высшего образования (ЕПВО)).
                        <br/>
                        <br/>
                        - После закрытия базы приема заявлений выбранные направление подготовки, группа образовательных программ, язык сдачи тестирования и город сдачи тестирования не подлежат изменению.
                    </>}></Alert>
                <Bottom
                    text={<>
                        По вопросам организации тестирования ЕНТ: <br /><br />- 8 (7172) 69 50 96<br />- 69 52 80
                    </>}
                    button={{
                        text: "Инструкция ПВО",
                        url: "https://app.testcenter.kz/assets/instr_pvo_2023_rus.pdf"
                    }}
                ></Bottom>
            </div>
        </>
    )
}

export default Third;
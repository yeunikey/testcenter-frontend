import Alert from "../../../../components/alert/Alert";
import Bottom from "./Bottom";

function Second() {
    return (
        <>
            <div className="title">
                Единое национальное тестирование
            </div>
            <div className="section">
                <Alert classes="statementcontent__alert" text={"Прием заявлений на августовское ЕНТ будет проводиться с 20 по 30 июля."}></Alert>
                <Bottom
                    text={<>
                        По вопросам организации тестирования ЕНТ: <br /><br />- 8 (7172) 69 50 96<br />- 69 52 80
                    </>}
                    button={{
                        text: "Инструкция ОЗП",
                        url: "https://app.testcenter.kz/assets/inst_rus.pdf"
                    }}
                ></Bottom>
            </div>
        </>
    )
}

export default Second;
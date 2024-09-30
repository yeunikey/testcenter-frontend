import Bottom from "./Bottom";

function First() {
    return (
        <>
            <div className="title">
                Оценка знаний педагогов
            </div>
            <div className="section">
                <Bottom
                    text={<>
                        По вопросам организации тестирования ОЗП: <br /><br />- 8 (7172) 69 52 63 <br />- 8 (7172) 69 52 88
                    </>}
                    button={{
                        text: "Инструкция ЕНТ",
                        url: "https://app.testcenter.kz/assets/instr_ent.pdf"
                    }}
                ></Bottom>
            </div>
        </>
    )
}

export default First;
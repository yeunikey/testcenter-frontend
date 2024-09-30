import Button from "../../../../components/button/Button";

function Bottom(props: { text: any, button: { text: string, url: string } }) {
    return (
        <div className="statementcontent__contact contact">
            <div className="contact__text">
                {props.text}
            </div>
            <div className="contact__line"></div>
            <Button classes="" text={props.button.text} url={props.button.url} onClick={null}></Button>
        </div>
    )
}

export default Bottom;

import './button.scss';

function Button(props: {classes: string, text: string, url: string | null, onClick: Function | null}) {
    return (
        <div 
            className={"button " + props.classes} 
            onClick={() => {
                if (props.url != null) {
                    window.location.href = props.url
                    return;
                }
                if (props.onClick != null) {
                    props.onClick();
                }
            }}>
            {props.text}
        </div>
    );
}

export default Button;
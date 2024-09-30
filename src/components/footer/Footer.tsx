
import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__line"></div>
                <div className="footer__content">
                    <img className="footer__company" src="https://app.testcenter.kz/assets/images/logo-wo-words.png" alt="logo" />
                    <div className="footer__version">v1.0-dev</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
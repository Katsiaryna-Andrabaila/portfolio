import { Logo } from 'features/logo';
import './footer.styles.scss';

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_wrapper">
                <Logo />
                <div className="footer_contact">
                    <a
                        href="https://www.linkedin.com/in/katsiaryna-andrabaila-94669b23a/"
                        target="_blank"
                        className="linkedin_link"
                    >
                        linkedin
                    </a>
                    <a
                        href="https://github.com/Katsiaryna-Andrabaila"
                        target="_blank"
                        className="github_link"
                    >
                        github
                    </a>
                    <a
                        href="https://t.me/katsiaryna_andrabaila"
                        target="_blank"
                        className="telegram_link"
                    >
                        telegram
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B48501058257&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="whatsApp_link"
                    >
                        whatsapp
                    </a>
                    <a
                        href="https://www.messenger.com/t/61551427735604/"
                        target="_blank"
                        className="messenger_link"
                    >
                        messenger
                    </a>
                </div>
                <p>© Katsiaryna Andrabaila</p>
            </div>
        </footer>
    );
};

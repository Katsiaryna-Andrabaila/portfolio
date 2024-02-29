import './index.styles.scss';

export const Links = () => {
    return (
        <div className="links">
            <a
                href="https://www.linkedin.com/in/katsiaryna-andrabaila-94669b23a/"
                target="_blank"
                className="linkedin_link"
            >
                <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
            <a
                href="https://github.com/Katsiaryna-Andrabaila"
                target="_blank"
                className="github_link"
            >
                <img src="/icons/github.svg" alt="github" />
            </a>
            <a
                href="https://t.me/katsiaryna_andrabaila"
                target="_blank"
                className="telegram_link"
            >
                <img src="/icons/tg.svg" alt="telegram" />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=%2B48501058257&text&type=phone_number&app_absent=0"
                target="_blank"
                className="whatsApp_link"
            >
                <img src="/icons/whatsapp.svg" alt="whatsApp" />
            </a>
            <a
                href="https://www.messenger.com/t/61551427735604/"
                target="_blank"
                className="messenger_link"
            >
                <img src="/icons/messenger.svg" alt="messenger" />
            </a>
        </div>
    );
};

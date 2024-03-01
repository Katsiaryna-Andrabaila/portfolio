import './about.styles.scss';
import { Link } from 'react-scroll';

export const About = () => {
    return (
        <div className="about_wrapper" id="about">
            <h1>
                Hey there! I&apos;m <b>Kate</b>
            </h1>
            <p>
                Poland based <b>Front-end developer</b>, speaking russian,
                belarusian, english and polish.
                <br />
                I&apos;m focused on creating custom user-friendly interactive
                websites.
                <br />
                Take a look at my latest projects in the{' '}
                <Link to="works">works ↓</Link> section.
                <br />
                Feel free to contact me!
            </p>
        </div>
    );
};

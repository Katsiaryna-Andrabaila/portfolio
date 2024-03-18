import './about.styles.scss';
import { ReactTyped } from 'react-typed';

export const About = () => {
    return (
        <div className="about_wrapper" id="about">
            <ReactTyped
                strings={[
                    '<h1>Hey there! I&apos;m <b>Kate</b></h1><br /><p>Poland based <b>Front-end developer</b>, speaking russian, belarusian, english and polish.<br />I&apos;m focused on creating custom user-friendly interactive websites.<br />Take a look at my latest projects in the <a href="#works">works ↓</a> section.<br />Feel free to contact me!</p>',
                ]}
                typeSpeed={20}
                startWhenVisible
            />
        </div>
    );
};

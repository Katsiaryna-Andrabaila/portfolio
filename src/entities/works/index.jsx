import { VisitLink } from 'features/visitLink';
import './works.styles.scss';
import { useEffect, useRef } from 'react';

export const Works = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const onEntry = (entry) => {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add('work_visible');
            }
        });
    };

    useEffect(() => {
        const refArr = [ref1, ref2, ref3, ref4, ref5];
        const options = { threshold: [0.5] };
        const observer = new IntersectionObserver(onEntry, options);

        refArr.forEach((ref) => {
            const { current } = ref;

            if (current) observer.observe(current);

            return () => {
                if (current) observer.unobserve(current);
            };
        });
    }, []);

    return (
        <div className="works_wrapper" id="works">
            <h2>works</h2>
            <section className="project stoptrip" ref={ref1}>
                <div className="img_container">
                    <img src="/images/stoptrip_screen.png"></img>
                </div>
                <div className="description">
                    <p>
                        Stoptrip is a project for travelers which helps people
                        find housing, transport, events and many other useful
                        things.
                        <br />
                        <br />
                        On the project I&apos;m one of the two react developers,
                        who is responsible for implementing of the adaptive
                        layout from Figma, connection a location map with
                        Leaflet.js and OpenLayers, translation of the website
                        into English using i18next, lazy loading of SPA
                        application pages and many other things.
                    </p>
                    <VisitLink link="https://stoptrip.com" />
                </div>
            </section>
            <div className="space"></div>
            <section className="project marinamk" ref={ref2}>
                <div className="description">
                    <p>
                        MarinaMK is a website for nail master with a useful
                        feature for clients of appointment for the selected day,
                        time and procedure. Besides, there is a custom version
                        of the admin panel for the master and translation into
                        three languages - english, russian and arabian.
                        <br />
                        <br />
                        This project was made entirely by me - the backend and
                        frontend parts - with a modern framework Next.js. The
                        design and content were implemented in agreement with
                        the master from Cairo.
                    </p>
                    <VisitLink link="https://marinamk.vercel.app/" />
                </div>
                <div className="img_container">
                    <img src="/images/marinamk_screen.png"></img>
                </div>
            </section>
            <div className="space"></div>
            <section className="project songbird" ref={ref3}>
                <div className="img_container">
                    <img src="/images/songbird_screen.png"></img>
                </div>
                <div className="description">
                    <p>
                        Songbird is a famous game in which a player needs to
                        guess a bird by its voice.
                        <br />
                        <br />
                        It&apos;s an educational project while studying at The
                        Rolling Scopes School. The game has welcome, quiz and
                        bird gallery pages and translation into english and
                        russian.
                        <br />
                        <br />
                        This project was made with pure JS, SCSS and HTML.
                    </p>
                    <VisitLink link="https://songbird-rs.netlify.app/" />
                </div>
            </section>
            <div className="space"></div>
            <section className="project puzzle" ref={ref4}>
                <div className="description">
                    <p>
                        Gem puzzle is a famous game in which a player needs to
                        arrange all cells in ascending order.
                        <br />
                        <br />
                        It&apos;s an educational project while studying at The
                        Rolling Scopes School. The game has such features as
                        drug-and-drop, game saving, table with best results,
                        game duration display, custom frame sizes, sound
                        accompaniment and CSS animation
                        <br />
                        <br />
                        This project was made with pure JS, SCSS and HTML.
                    </p>
                    <VisitLink link="https://gem-puzzle-15.netlify.app/" />
                </div>
                <div className="img_container">
                    <img src="/images/puzzle_screen.png"></img>
                </div>
            </section>
            <div className="space"></div>
            <section className="project graphiql" ref={ref5}>
                <div className="img_container">
                    <img src="/images/graphiql_screen.png"></img>
                </div>
                <div className="description">
                    <p>
                        Graphiql is a teamwork where I had a successful
                        experience as a team leader.
                        <br />
                        <br />
                        This project was made as a playground/IDE for graphQL
                        requests to the Rick&Morty API. It has authorization
                        through Firebase. Styles were implemented with Mantine.
                        Key features also include sign-in with a google account,
                        two languages, dark/light theme, query history, redirect
                        when token expired and others.
                        <br />
                        <br />
                        The project was made with React.js.
                    </p>
                    <VisitLink link="https://qraphiql-app-react-rsschool.netlify.app/" />
                </div>
            </section>
        </div>
    );
};

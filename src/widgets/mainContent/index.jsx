import { About } from 'entities/about';
import { Header } from 'entities/header';
import './mainContent.styles.scss';
import { Works } from 'entities/works';

export const MainContent = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Works />
            </main>
            <div style={{ height: '200vh' }}></div>
        </>
    );
};

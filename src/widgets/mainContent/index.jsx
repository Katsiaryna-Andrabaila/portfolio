import { About } from 'entities/about';
import { Header } from 'entities/header';
import './mainContent.styles.scss';

export const MainContent = () => {
    return (
        <>
            <Header />
            <main>
                <About />
            </main>

            <div style={{ height: '200vh' }}></div>
        </>
    );
};

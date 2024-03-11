import { About } from 'entities/about';
import { Header } from 'entities/header';
import './mainContent.styles.scss';
import { Works } from 'entities/works';
import { Footer } from 'entities/footer';

export const MainContent = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Works />
            </main>
            <Footer />
        </>
    );
};

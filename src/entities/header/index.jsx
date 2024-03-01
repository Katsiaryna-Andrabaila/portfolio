import { Link } from 'react-scroll';
import './header.styles.scss';
import { Logo } from 'features/logo';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
    const ref = useRef(null);
    const [className, setClassName] = useState('');

    const handleScroll = (elRef) => {
        if (elRef.current) {
            if (
                document.body.scrollTop > 1 ||
                document.documentElement.scrollTop > 1
            ) {
                setClassName('fixed_header');
            } else {
                setClassName('');
            }
        }
    };

    useEffect(() => {
        handleScroll(ref);

        window.addEventListener('scroll', () => handleScroll(ref));

        return () => {
            window.removeEventListener('scroll', () => handleScroll(ref));
        };
    }, []);

    return (
        <header ref={ref} className={className}>
            <div className="header_wrapper">
                <Logo />
                <nav className="header_nav">
                    <li>
                        <Link to="about" activeClass="active">
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="works" activeClass="active">
                            works
                        </Link>
                    </li>
                    <li>
                        <Link to="footer" activeClass="active" spy>
                            contact
                        </Link>
                    </li>
                </nav>
            </div>
        </header>
    );
};

import './logo.styles.scss';

export const Logo = (props) => {
    const handleClick = () => {
        if (props.isFooter) {
            window.scrollTo(0, 0);
            return;
        }
        window.location.reload();
    };

    return (
        <div className="logo" onClick={handleClick}>
            KA
            <span className="logo_overlay">KA</span>
        </div>
    );
};

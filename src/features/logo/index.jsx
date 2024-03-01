import './logo.styles.scss';

export const Logo = () => {
    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className="logo" onClick={handleClick}>
            KA
            <span className="logo_overlay">KA</span>
        </div>
    );
};

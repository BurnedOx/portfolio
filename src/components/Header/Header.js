import React from 'react';
import styles from "./Header.module.css";
import NavItems from './NavItems/NavItems';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

const Header = props => {
    const isHome = props.location.pathname === '/';
    const [scrolled, setScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100;
            if (!isTop) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    const openHeaderHandler = () => setIsOpen(!isOpen);

    const headerClass = [scrolled || !isHome ? styles.HeaderActive : styles.HeaderInitial];
    const navClass = [styles.Navs]
    if (isOpen === true) {
        headerClass.push(styles.openMenu);
        navClass.push(styles.showNav);
    }

    const navClicked = (page) => {
        setIsOpen(false);
        props.goTo(page)
    }

    return (
        <header className={headerClass.join(' ')} style={!isHome ? {position: 'relative'} : null}>
            <div className={styles.LogoMenuGroup}>
                <div className={styles.logo}>Mak-Dev</div>
                <div className={styles.menu} onClick={openHeaderHandler}>
                    <MenuIcon />
                </div>
            </div>
            <div className={navClass.join(' ')}>
                <NavItems
                    goTo={navClicked}
                    isHome={isHome}
                />
            </div>
        </header>
    );
};

export default withRouter(Header);
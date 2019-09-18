import React from 'react';
import styles from './NavItems.module.css';
import { Link } from 'react-router-dom';

const NavItems = props => {
    return (
        <div className={styles.NavItems}>
            {props.isHome ?
                <React.Fragment>
                    <div onClick={() => props.goTo("About")}>About</div>
                    <div onClick={() => props.goTo("Services")}>Services</div>
                    <div onClick={() => props.goTo("Projects")}>Projects</div>
                    <div onClick={() => props.goTo("Contact")}>Contact</div>
                    <Link to='/price'>Price</Link>
                </React.Fragment> :
    
                <React.Fragment>
                    <Link to='/'>Home</Link>
                </React.Fragment>
            }
        </div>
    );
}

export default NavItems;
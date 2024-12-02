import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>RBAC Dashboard</div>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <Link to="/users" className={`${styles.navLink} ${styles.blink}`}>Users</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/roles" className={`${styles.navLink} ${styles.blink}`}>Roles</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

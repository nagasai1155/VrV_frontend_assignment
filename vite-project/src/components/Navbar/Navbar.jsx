import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>RBAC Dashboard</div>
            <center>
                <div className={styles.floatingText}> welcome to VRV security</div>
            </center>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/users" className={styles.navLink}>Users</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/roles" className={styles.navLink}>Roles</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

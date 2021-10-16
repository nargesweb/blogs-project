import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css'

const Navbar = () => {
    const [show,setShow] = useState(false)
    console.log(show);

    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>Site</h2>
            <nav className={styles.menu}>
                <i className="uil uil-times"></i>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/products">Products</Link></li>
                    <li><Link to ="/login">Login</Link></li>
                </ul>
            </nav>
            <span className={styles.icon}>
                <i className="uil uil-search"></i>
                <i className="uil uil-shopping-cart"></i>
            </span>
            <span className={styles.hmmenu}>
                <i className="uil uil-bars"></i>
            </span>
        </div>
    );
};

export default Navbar;
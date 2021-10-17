import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <div className={styles.text}>
                    <h2>footer Site :</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra 
                        accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean
                    </p>
                </div>
                <div className={styles.share}>
                    <h3>conect whit :</h3>
                    <i className="uil uil-instagram"></i>
                    <i className="uil uil-facebook-f"></i>
                    <i className="uil uil-telegram-alt"></i>
                    <i className="uil uil-linkedin-alt"></i>
                </div>
            </div>
            <div className={styles.endfooter}>
                <p>&copy; Copyright global reserved</p>
            </div>
        </div>
    );
};

export default Footer;
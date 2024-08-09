import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import developed from "../../assets/developed.png";

export const Footer = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={logo} alt="DragonBallZ" className={styles.logo} />
                <div className={styles.redesContainer}>
                    <h3>Redes</h3>
                    <div className={styles.redes}>
                        <a href="https://www.linkedin.com/in/jorge-neder/">
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                            Linkedin
                        </a>
                        <a href="https://github.com/JorgeNeder97">
                            <i className="fa-brands fa-square-github fa-xl"></i>
                            GitHub
                        </a>
                    </div>
                </div>
                <img
                    src={developed}
                    alt="DevelopedBy"
                    className={styles.developed}
                />
            </div>
        </>
    );
};

import styles from './FrontPage.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';



export const FrontPage = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={logo} alt="Dragon Ball Z" className={styles.logo} />
                <Link to="/home" className={styles.link}>INGRESAR</Link>
            </div>
        </>
    )
}
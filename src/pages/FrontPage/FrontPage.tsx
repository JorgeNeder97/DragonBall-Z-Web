import styles from './FrontPage.module.css';
import logo from '../../assets/logo.png';
import { SoundInLink } from '../../components/SoundInLink/SoundInLink';



export const FrontPage = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={logo} alt="Dragon Ball Z" className={styles.logo} />
                <SoundInLink to="/home" className={styles.link}>INGRESAR</SoundInLink>
            </div>
        </>
    )
}
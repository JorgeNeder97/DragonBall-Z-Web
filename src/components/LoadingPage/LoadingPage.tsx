import styles from './LoadingPage.module.css';
import logo from '../../assets/logo.png';



export const LoadingPage = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={logo} alt="Dragon Ball Z" className={styles.logo} />
                <p className={styles.link}>CARGANDO</p>
            </div>
        </>
    )
}
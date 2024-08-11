import { SoundInLink } from '../SoundInLink/SoundInLink';
import styles from './NavBar.module.css';


export const NavBar = () => {
    return (
        <div className={styles.mainContainer}>
            <SoundInLink className={styles.link} to="/characters">Personajes</SoundInLink>
            <SoundInLink className={styles.link} to="/planets">Planetas</SoundInLink>
        </div>
    )
}
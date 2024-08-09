import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className={styles.mainContainer}>
            <Link className={styles.link} to="/characters">Characters</Link>
            <Link className={styles.link} to="/planets">Planets</Link>
        </div>
    )
}
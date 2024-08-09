import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import Wallpaper from '../../assets/headerIMG.png'


export const Header = () => {
    return (
        <div className={styles.mainContainer}>
            <Link to="/home" className={styles.imageContainer}>
                <img src={Wallpaper} alt="DragonBallSite" className={styles.image} />
            </Link>
            <NavBar />
        </div>
    )
}
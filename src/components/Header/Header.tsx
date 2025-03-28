import styles from './Header.module.css';
import { NavBar } from '../NavBar/NavBar';
import Wallpaper from '../../assets/headerIMG.webp'
import { SoundOutLink } from '../SoundOutLink/SoundOutLink';


export const Header = () => {
    return (
        <div className={styles.mainContainer}>
            <SoundOutLink to="/home" className={styles.imageContainer}>
                <img src={Wallpaper} alt="DragonBallSite" className={styles.image} />
            </SoundOutLink>
            <NavBar />
        </div>
    )
}
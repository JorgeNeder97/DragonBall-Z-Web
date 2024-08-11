import { SoundOutLink } from '../SoundOutLink/SoundOutLink';
import styles from './VolverAtrasButton.module.css';

interface Props {
    url: string;
}

export const VolverAtrasButton = (props: Props) => {
    return (
        <SoundOutLink to={props.url} className={styles.mainContainer}>
            <i className="fa-solid fa-chevron-left fa-xl"></i>
            <h3>Volver Atrás</h3>
        </SoundOutLink>
    )
}
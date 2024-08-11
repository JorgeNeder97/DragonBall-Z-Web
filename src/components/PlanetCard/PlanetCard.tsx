import { SoundInLink } from '../SoundInLink/SoundInLink';
import styles from './PlanetCard.module.css';

interface Props {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
}

export const PlanetCard = (props: Props) => {
    return (
        <SoundInLink to={`/planets/${props.id}`} className={styles.mainContainer}>
            <div className={styles.tituloImagen}>
                <h4 className={styles.planetName}>{props.name}</h4>
                <img src={props.image} alt={props.name} className={styles.planetImage} />
                <p className={styles.planetIsDestroyed}>Destruido: {props.isDestroyed ? 'Si' : 'No'}</p>
            </div>
            <div className={styles.descripcion}>
                <p className={styles.planetDescription}>{props.description}</p>
            </div>
        </SoundInLink>
    )
}
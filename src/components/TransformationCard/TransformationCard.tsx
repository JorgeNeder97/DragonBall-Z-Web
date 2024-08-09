import styles from "./TransformationCard.module.css";
import { Link } from 'react-router-dom';

interface Props {
    id: number;
    image: string;
    ki: string;
    name: string;
};

export const TransformationCard = (props: Props) => {
    return (
        <Link to={`/characters/${props.id}`} className={styles.mainContainer}>
            <div className={styles.charName}>
                <h4>{props.name}</h4>
            </div>
            <div className={styles.charImageContainer}>
                <img
                    src={props.image}
                    alt={props.name}
                    className={styles.charImage}
                />
            </div>
            <div className={styles.charDataContainer}>
                <div className={styles.charDataGroup}>
                    <p>Ki: {props.ki}</p>
                </div>
            </div>
        </Link>
    );
};

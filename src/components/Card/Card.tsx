import { SoundInLink } from "../SoundInLink/SoundInLink";
import styles from "./Card.module.css";

interface Props {
    affiliation: string;
    deletedAt: null;
    description: string;
    gender: string;
    id: number;
    image: string;
    ki: string;
    maxKi: string;
    name: string;
    race: string;
};

export const Card = (props: Props) => {
    return (
        <SoundInLink to={`/characters/${props.id}`} className={styles.mainContainer}>
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
                    <p>{props.race} - {props.gender}</p>
                    <p>Ki: {props.ki}</p>
                    <p>Max Ki: {props.maxKi}</p>
                    <p>Type: {props.affiliation}</p>
                </div>
            </div>
        </SoundInLink>
    );
};

import styles from "./PiccoloButton.module.css";
import picoloGif from "./Picolo.gif";
import picoloPng from "./Picolo.png";
import { SoundOutLink } from "../SoundOutLink/SoundOutLink";

interface Props {
    url: string;
}

export const PiccoloButton = (props: Props) => {
    return (
        <SoundOutLink to={props.url} className={styles.mainContainer}>
            <div className={styles.textoContainer}>
                <h4 className={styles.texto}>Volver</h4>
                <h4 className={styles.texto}>Atrás</h4>
            </div>

            <div className={styles.gifContainer}>
                <img
                    src={picoloPng}
                    alt="Alejate Insécto"
                    className={styles.staticImage}
                />
                <img
                    src={picoloGif}
                    alt="Alejate Insécto"
                    className={styles.animatedImage}
                />
            </div>
        </SoundOutLink>
    );
};

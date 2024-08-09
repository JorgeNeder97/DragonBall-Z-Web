import styles from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import video from "../../assets/Video.mp4";

export const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <video autoPlay loop className={styles.video}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

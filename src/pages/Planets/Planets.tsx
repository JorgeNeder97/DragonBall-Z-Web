import styles from './Planets.module.css';
import { Header } from '../../components/Header/Header';

type Props = {}

export const Planets = (props: Props) => {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>

            </div>
        </>
    )
}
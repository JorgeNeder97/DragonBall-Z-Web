import styles from './Planet.module.css';
import { Header } from '../../../components/Header/Header';

type Props = {}

export const Planet = (props: Props) => {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>

            </div>
        </>
    )
}
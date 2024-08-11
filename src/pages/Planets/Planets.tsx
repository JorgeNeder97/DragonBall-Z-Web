import styles from "./Planets.module.css";
import axios from "axios";
import audio from '../../assets/planets.mp3';
import { Header } from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { LoadingPage } from "../../components/LoadingPage/LoadingPage";
import { PlanetCard } from "../../components/PlanetCard/PlanetCard";

interface Planet {
    id: number;
    name: string;
    description: string;
    image: string;
    isDestroyed: boolean;
    deletedAt: null;
}

export const Planets = () => {
    const [planets, setPlanets] = useState<null | Planet[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const allPlanets = async () => {
            const res: Planet[] = (
                await axios.get("https://dragonball-api.com/api/planets")
            ).data.items;
            setPlanets(res);
            setIsLoading(false);
        };

        allPlanets();
    }, []);

    if (isLoading) return <LoadingPage />;
    else
        return (
            <>
                <audio className={styles.audio} autoPlay loop>
                    <source src={audio} type="audio/mpeg" />
                </audio>
                <Header />
                <div className={styles.mainContainer}>
                    <h2 className={styles.titulo}>Planetas</h2>
                    <div className={styles.planetCardsContainer}>
                        {planets?.map(planet => (
                            <PlanetCard 
                                key={planet.id}
                                id={planet.id}
                                name={planet.name}
                                image={planet.image}
                                description={planet.description}
                                isDestroyed={planet.isDestroyed}
                                deletedAt={planet.deletedAt}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
};

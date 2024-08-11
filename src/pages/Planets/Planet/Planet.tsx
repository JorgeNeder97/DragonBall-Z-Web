import styles from "./Planet.module.css";
import axios from "axios";
import audio from "../../../assets/planets.mp3";
import { Header } from "../../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingPage } from "../../../components/LoadingPage/LoadingPage";
import { PlanetCard } from "../../../components/PlanetCard/PlanetCard";
import { Card } from "../../../components/Card/Card";
import { PiccoloButton } from "../../../components/PiccoloButton/PiccoloButton";

interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null;
}

interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
    characters: Character[];
}

export const Planet = () => {
    const params = useParams();
    const id = params.id;

    const [planet, setPlanet] = useState<null | Planet>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const onePlanet = async () => {
            const res: Planet = (
                await axios.get(`https://dragonball-api.com/api/planets/${id}`)
            ).data;
            setPlanet(res);
            setIsLoading(false);
        };

        onePlanet();
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
                    <div className={styles.encabezado}>
                        <h2 className={styles.titulo}>Planeta</h2>
                        <div className={styles.volverAtrasContainer}>
                            <PiccoloButton url={"/planets"} />
                        </div>
                    </div>
                    {
                        planet != null ?
                        <div className={styles.container}>
                            <PlanetCard 
                                key={planet.id}
                                id={planet.id}
                                name={planet.name}
                                isDestroyed={planet.isDestroyed}
                                image={planet.image}
                                description={planet.description}
                                deletedAt={planet.deletedAt}
                            />
                            {
                                planet.characters && planet.characters.length > 0 ?
                                <h3 className={styles.titulo}>Personajes de este planeta</h3> :
                                ''
                            }
                            <div className={styles.charactersContainer}>
                                {planet.characters.map(character => (
                                        <Card 
                                            key={character.id}
                                            id={character.id}
                                            name={character.name}
                                            ki={character.ki}
                                            maxKi={character.maxKi}
                                            race={character.race}
                                            gender={character.gender}
                                            description={character.description}
                                            image={character.image}
                                            affiliation={character.affiliation}
                                            deletedAt={character.deletedAt}
                                        />
                                ))}
                            </div>
                        </div> 
                        : ""
                    }
                </div>
            </>
        );
};

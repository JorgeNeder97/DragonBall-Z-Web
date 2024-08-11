import styles from "./Character.module.css";
import axios from "axios";
import { Header } from "../../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../../components/Card/Card";
import { LoadingPage } from "../../../components/LoadingPage/LoadingPage";
import { TransformationCard } from "../../../components/TransformationCard/TransformationCard";
import audio from "../../../assets/characters.mp3";
import { PlanetCard } from "../../../components/PlanetCard/PlanetCard";
import { VolverAtrasButton } from "../../../components/VolverAtrasButton/VolverAtrasButton";

interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
}

interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: null;
}

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
    originPlanet?: Planet;
    transformations?: Transformation[];
}

export const Character = () => {
    const params = useParams();
    const id = params.id;

    const [character, setCharacter] = useState<null | Character>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const oneCharacter = async () => {
            const res: Character = (
                await axios.get(
                    `https://dragonball-api.com/api/characters/${id}`
                )
            ).data;
            setCharacter(res);
            setIsLoading(false);
        };

        oneCharacter();
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
                    {character != null ? (
                        <div className={styles.container}>
                            <div className={styles.card}>
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
                            </div>
                            <div className={styles.description}>
                                <div className={styles.descriptionTituloContainer}>
                                    <h2 className={styles.descriptionTitulo}>Descripción</h2>
                                    <div className={styles.volverAtrasContainer}>
                                        <VolverAtrasButton url={'/characters'} />
                                    </div>
                                </div>
                                <p className={styles.descriptionText}>{character.description}</p>
                            </div>
                            <div className={styles.planetAndTransformations}>
                                <div className={styles.planet}>
                                    <h2 className={styles.planetTitulo}>Planeta Natal</h2>
                                    {
                                        character.originPlanet ? 
                                        <PlanetCard 
                                            key={character.originPlanet.id}
                                            id={character.originPlanet.id}
                                            name={character.originPlanet.name}
                                            image={character.originPlanet.image}
                                            description={character.originPlanet.description}
                                            isDestroyed={character.originPlanet.isDestroyed}
                                            deletedAt={character.originPlanet.deletedAt}
                                        /> 
                                        : ''
                                    } 
                                </div>
                                <div className={styles.transformationsContainer}>
                                    {
                                        character.transformations && character.transformations.length > 0 ? 
                                        <h2 className={styles.transformationsTitulo}>Transformaciones</h2> :
                                        ''
                                        // <h2 className={styles.transformationsTitulo}>No Tiene Transformaciones</h2>
                                    }
                                    <div className={styles.transformations}>
                                        {character.transformations &&
                                        character.transformations.length > 0
                                            ? character.transformations.map(
                                                (transformation) => (
                                                    <TransformationCard
                                                        key={transformation.id}
                                                        id={transformation.id}
                                                        image={transformation.image}
                                                        ki={transformation.ki}
                                                        name={transformation.name}
                                                    />
                                                )
                                            )
                                            : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </>
        );
};
